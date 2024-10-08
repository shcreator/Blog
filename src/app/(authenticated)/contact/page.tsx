'use client'

import { Form, Input, Button, Typography, Space } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ContactPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { mutateAsync: createContactSubmission } =
    Api.contactSubmission.create.useMutation()

  const onFinish = async (values: {
    name: string
    email: string
    message: string
  }) => {
    try {
      await createContactSubmission({
        data: {
          name: values.name,
          email: values.email,
          message: values.message,
        },
      })
      enqueueSnackbar('Your message has been sent successfully!', {
        variant: 'success',
      })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to send your message. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}
      >
        <Title level={2}>Contact Us</Title>
        <Paragraph>
          Have a question or want to get in touch? Fill out the form below, and
          we'll get back to you as soon as possible.
        </Paragraph>
        <Form
          name="contact"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ name: user?.name || '', email: user?.email || '' }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </PageLayout>
  )
}
