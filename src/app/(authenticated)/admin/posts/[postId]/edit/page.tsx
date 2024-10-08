'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Space,
  Upload,
  Spin,
  Card,
} from 'antd'
import { UploadOutlined, SaveOutlined, RobotOutlined } from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface'
import type { Prisma } from '@prisma/client'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EditBlogPostPage() {
  const router = useRouter()
  const params = useParams<{ postId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [loading, setLoading] = useState(false)

  const {
    data: post,
    isLoading: isPostLoading,
    refetch,
  } = Api.postData.findUnique.useQuery({
    where: { id: params.postId },
    include: { attachments: true },
  })

  const { mutateAsync: updatePost } = Api.postData.update.useMutation()
  const { mutateAsync: createAttachment } = Api.attachment.create.useMutation()
  const { mutateAsync: deleteAttachment } = Api.attachment.delete.useMutation()
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  useEffect(() => {
    if (post) {
      form.setFieldsValue({
        title: post.title,
        content: post.content,
      })
      setFileList(
        post.attachments.map(att => ({
          uid: att.id,
          name: att.fileUrl?.split('/').pop() || 'file',
          status: 'done',
          url: att.fileUrl,
        })),
      )
    }
  }, [post, form])

  const handleSubmit = async (values: { title: string; content: string }) => {
    try {
      setLoading(true)
      await updatePost({
        where: { id: params.postId },
        data: {
          title: values.title,
          content: values.content,
        },
      })

      // Handle file uploads
      const newFiles = fileList.filter(file => file.originFileObj)
      for (const file of newFiles) {
        if (file.originFileObj) {
          const { url } = await upload({ file: file.originFileObj })
          await createAttachment({
            data: {
              fileUrl: url,
              fileType: file.type,
              postId: params.postId,
            },
          })
        }
      }

      // Handle file deletions
      const deletedFiles = post?.attachments.filter(
        att => !fileList.some(file => file.uid === att.id),
      )
      for (const file of deletedFiles || []) {
        await deleteAttachment({ where: { id: file.id } })
      }

      await refetch()
      enqueueSnackbar('Blog post updated successfully', { variant: 'success' })
      router.push('/admin/posts')
    } catch (error) {
      console.error(error)
      enqueueSnackbar('Failed to update blog post', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleAiUpdate = async () => {
    try {
      setLoading(true)
      const prompt = `Improve the following blog post title and content:
        Title: ${form.getFieldValue('title')}
        Content: ${form.getFieldValue('content')}`
      const { answer } = await generateText({ prompt })
      const [newTitle, ...newContentArr] = answer.split('\n')
      const newContent = newContentArr.join('\n').trim()
      form.setFieldsValue({
        title: newTitle.replace('Title: ', ''),
        content: newContent.replace('Content: ', ''),
      })
      enqueueSnackbar('Blog post updated with AI suggestions', {
        variant: 'success',
      })
    } catch (error) {
      console.error(error)
      enqueueSnackbar('Failed to generate AI suggestions', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  if (isPostLoading) {
    return <Spin size="large" />
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={2}>Edit Blog Post</Title>
        <Paragraph>
          Update your blog post content and associated files.
        </Paragraph>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: 'Please input the content!' }]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item label="Attachments">
            <Upload
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                loading={loading}
              >
                Save Changes
              </Button>
              <Button
                onClick={handleAiUpdate}
                icon={<RobotOutlined />}
                loading={loading}
              >
                AI Update
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
