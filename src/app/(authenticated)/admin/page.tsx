'use client'

import { Typography, Row, Col, Card, Statistic, Button } from 'antd'
import {
  LineChartOutlined,
  CommentOutlined,
  EditOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AdminDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: posts, isLoading: postsLoading } =
    Api.postData.findMany.useQuery({})
  const { data: comments, isLoading: commentsLoading } =
    Api.comment.findMany.useQuery({})

  const totalPosts = posts?.length || 0
  const totalComments = comments?.length || 0
  const recentPosts =
    posts?.filter(post =>
      dayjs(post.dateCreated).isAfter(dayjs().subtract(7, 'day')),
    )?.length || 0

  const handleManagePosts = () => {
    router.push('/admin/posts')
  }

  const handleManageComments = () => {
    router.push('/admin/comments')
  }

  const handleCreatePost = () => {
    router.push('/admin/posts/new')
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Title level={2}>Admin Dashboard</Title>
          <Paragraph>
            Welcome to the admin dashboard. Here you can view blog statistics
            and access management tools.
          </Paragraph>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card>
                <Statistic
                  title="Total Posts"
                  value={totalPosts}
                  prefix={<LineChartOutlined />}
                  loading={postsLoading}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card>
                <Statistic
                  title="Total Comments"
                  value={totalComments}
                  prefix={<CommentOutlined />}
                  loading={commentsLoading}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card>
                <Statistic
                  title="Posts in Last 7 Days"
                  value={recentPosts}
                  prefix={<EditOutlined />}
                  loading={postsLoading}
                />
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col xs={24} sm={8}>
              <Button type="primary" onClick={handleManagePosts} block>
                Manage Posts
              </Button>
            </Col>
            <Col xs={24} sm={8}>
              <Button type="primary" onClick={handleManageComments} block>
                Manage Comments
              </Button>
            </Col>
            <Col xs={24} sm={8}>
              <Button type="primary" onClick={handleCreatePost} block>
                Create New Post
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
