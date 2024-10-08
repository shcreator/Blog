'use client'

import { useState } from 'react'
import { Typography, Input, Button, Space, Upload, message } from 'antd'
import { UploadOutlined, SaveOutlined, RobotOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateBlogPostPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [fileList, setFileList] = useState<any[]>([])

  const { mutateAsync: uploadFile } = useUploadPublic()
  const createPost = Api.postData.create.useMutation()
  const generateText = Api.ai.generateText.useMutation()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handleFileUpload = async (info: any) => {
    const { status } = info.file
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
      setFileList([...fileList, info.file])
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  const handleAutoWrite = () => {
    generateText.mutate(
      { prompt: `Write a blog post about ${title}` },
      {
        onSuccess: data => {
          setContent(data.answer)
          enqueueSnackbar('Content generated successfully', {
            variant: 'success',
          })
        },
        onError: () => {
          enqueueSnackbar('Failed to generate content', { variant: 'error' })
        },
      },
    )
  }

  const handleSubmit = async () => {
    try {
      const uploadedFiles = await Promise.all(
        fileList.map(async file => {
          const result = await uploadFile({ file: file.originFileObj })
          return { fileUrl: result.url, fileType: file.type }
        }),
      )

      await createPost.mutateAsync({
        data: {
          title,
          content,
          userId: user?.id || '',
          attachments: {
            create: uploadedFiles,
          },
        },
      })

      enqueueSnackbar('Blog post created successfully', { variant: 'success' })
      router.push('/admin/posts')
    } catch (error) {
      enqueueSnackbar('Failed to create blog post', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Create New Blog Post</Title>
        <Paragraph>
          Use the form below to create a new blog post. You can use AI to
          auto-generate content.
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Input
            placeholder="Enter blog post title"
            value={title}
            onChange={handleTitleChange}
            style={{ marginBottom: '20px' }}
          />

          <TextArea
            rows={10}
            placeholder="Enter blog post content in Markdown"
            value={content}
            onChange={handleContentChange}
            style={{ marginBottom: '20px' }}
          />

          <Space>
            <Button icon={<RobotOutlined />} onClick={handleAutoWrite}>
              Auto-Write with AI
            </Button>

            <Upload
              accept="image/*,application/pdf"
              customRequest={({ onSuccess }: any) => onSuccess('ok')}
              onChange={handleFileUpload}
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload Files</Button>
            </Upload>
          </Space>

          <Button type="primary" icon={<SaveOutlined />} onClick={handleSubmit}>
            Create Blog Post
          </Button>
        </Space>
      </div>
    </PageLayout>
  )
}
