'use client'

import { Typography, Space, Button, Input, List, Avatar } from 'antd'
import { ReadOutlined, CommentOutlined, AudioOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function BlogPostViewPage() {
  const router = useRouter()
  const params = useParams<{ postId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [newComment, setNewComment] = useState('')

  const { data: post, isLoading: postLoading } =
    Api.postData.findUnique.useQuery({
      where: { id: params.postId },
      include: { user: true, comments: { include: { user: true } } },
    })

  const { mutateAsync: addComment } = Api.comment.create.useMutation()

  const handleAddComment = async () => {
    if (!user) {
      enqueueSnackbar('Please sign in to add a comment', { variant: 'info' })
      return
    }
    try {
      await addComment({
        data: {
          content: newComment,
          postId: params.postId,
          userId: user.id,
        },
      })
      enqueueSnackbar('Comment added successfully', { variant: 'success' })
      setNewComment('')
      router.refresh()
    } catch (error) {
      enqueueSnackbar('Failed to add comment', { variant: 'error' })
    }
  }

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(post?.content || '')
      window.speechSynthesis.speak(utterance)
    } else {
      enqueueSnackbar('Text-to-speech is not supported in this browser', {
        variant: 'error',
      })
    }
  }

  if (postLoading) {
    return (
      <PageLayout layout="full-width">
        <Text>Loading...</Text>
      </PageLayout>
    )
  }

  if (!post) {
    return (
      <PageLayout layout="full-width">
        <Text>Post not found</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={1}>{post.title}</Title>
        <Space>
          <ReadOutlined />
          <Text>{`Estimated reading time: ${post.estimatedReadingTime?.toString() || 'N/A'} minutes`}</Text>
        </Space>
        <Button icon={<AudioOutlined />} onClick={handleTextToSpeech}>
          Listen to post
        </Button>
        <Paragraph>{post.content}</Paragraph>
        <Title level={3}>Comments</Title>
        <List
          itemLayout="horizontal"
          dataSource={post.comments}
          renderItem={comment => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={comment.user?.pictureUrl} />}
                title={comment.user?.name}
                description={
                  <>
                    <Text>{comment.content}</Text>
                    <br />
                    <Text type="secondary">
                      {dayjs(comment.dateCreated).format('MMMM D, YYYY h:mm A')}
                    </Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
        {user && (
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Input.TextArea
              rows={4}
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <Button
              type="primary"
              icon={<CommentOutlined />}
              onClick={handleAddComment}
            >
              Add Comment
            </Button>
          </Space>
        )}
      </Space>
    </PageLayout>
  )
}
