'use client'

import { Typography, Table, Space, Button, Modal, Input } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ManageCommentsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editingComment, setEditingComment] = useState<any>(null)
  const [editedContent, setEditedContent] = useState('')

  const {
    data: comments,
    isLoading,
    refetch,
  } = Api.comment.findMany.useQuery({
    include: { user: true, post: true },
  })

  const { mutateAsync: deleteComment } = Api.comment.delete.useMutation()
  const { mutateAsync: updateComment } = Api.comment.update.useMutation()

  const handleDelete = async (id: string) => {
    try {
      await deleteComment({ where: { id } })
      enqueueSnackbar('Comment deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete comment', { variant: 'error' })
    }
  }

  const handleEdit = (comment: any) => {
    setEditingComment(comment)
    setEditedContent(comment.content || '')
    setEditModalVisible(true)
  }

  const handleUpdate = async () => {
    try {
      await updateComment({
        where: { id: editingComment.id },
        data: { content: editedContent },
      })
      enqueueSnackbar('Comment updated successfully', { variant: 'success' })
      setEditModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update comment', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'User',
      dataIndex: ['user', 'name'],
      key: 'userName',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Post',
      dataIndex: ['post', 'title'],
      key: 'postTitle',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => (
        <Text>{dayjs(date).format('YYYY-MM-DD HH:mm')}</Text>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Manage Comments</Title>
        <Text>
          As an admin user, you can view and manage comments on blog posts to
          moderate discussions.
        </Text>

        <Table
          dataSource={comments}
          columns={columns}
          rowKey="id"
          loading={isLoading}
          style={{ marginTop: '20px' }}
        />

        <Modal
          title="Edit Comment"
          visible={editModalVisible}
          onOk={handleUpdate}
          onCancel={() => setEditModalVisible(false)}
        >
          <Input.TextArea
            value={editedContent}
            onChange={e => setEditedContent(e.target.value)}
            rows={4}
          />
        </Modal>
      </div>
    </PageLayout>
  )
}
