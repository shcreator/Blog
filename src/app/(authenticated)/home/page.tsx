'use client'

import { Typography, Input, List, Space, Tag, Row, Col } from 'antd'
import {
  ClockCircleOutlined,
  StarOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchQuery, setSearchQuery] = useState('')

  const { data: posts, isLoading } = Api.postData.findMany.useQuery({
    include: { user: true },
    orderBy: { dateCreated: 'desc' },
  })

  const filteredPosts = posts?.filter(
    post =>
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const featuredPosts = filteredPosts?.filter(post => post.isFeatured)

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Title level={1}>Blog Posts</Title>
          <Paragraph>
            Discover the latest and most interesting blog posts from our
            community.
          </Paragraph>

          <Input
            placeholder="Search blog posts"
            prefix={<SearchOutlined />}
            style={{ marginBottom: 16 }}
            onChange={e => setSearchQuery(e.target.value)}
          />

          {featuredPosts && featuredPosts.length > 0 && (
            <>
              <Title level={2}>Featured Posts</Title>
              <List
                itemLayout="vertical"
                dataSource={featuredPosts}
                renderItem={post => (
                  <List.Item
                    key={post.id}
                    actions={[
                      <Space key="reading-time">
                        <ClockCircleOutlined />
                        <Text>
                          {post.estimatedReadingTime?.toString() || '0'} min
                          read
                        </Text>
                      </Space>,
                      <Tag key="featured" color="gold">
                        <StarOutlined /> Featured
                      </Tag>,
                    ]}
                    onClick={() => router.push(`/posts/${post.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <List.Item.Meta
                      title={post.title}
                      description={
                        <Space direction="vertical">
                          <Text type="secondary">By {post.user?.name}</Text>
                          <Text type="secondary">
                            {dayjs(post.dateCreated).format('MMMM D, YYYY')}
                          </Text>
                        </Space>
                      }
                    />
                    <Paragraph ellipsis={{ rows: 2 }}>{post.content}</Paragraph>
                  </List.Item>
                )}
              />
            </>
          )}

          <Title level={2}>All Posts</Title>
          <List
            itemLayout="vertical"
            loading={isLoading}
            dataSource={filteredPosts}
            renderItem={post => (
              <List.Item
                key={post.id}
                actions={[
                  <Space key="reading-time">
                    <ClockCircleOutlined />
                    <Text>
                      {post.estimatedReadingTime?.toString() || '0'} min read
                    </Text>
                  </Space>,
                ]}
                onClick={() => router.push(`/posts/${post.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <List.Item.Meta
                  title={post.title}
                  description={
                    <Space direction="vertical">
                      <Text type="secondary">By {post.user?.name}</Text>
                      <Text type="secondary">
                        {dayjs(post.dateCreated).format('MMMM D, YYYY')}
                      </Text>
                    </Space>
                  }
                />
                <Paragraph ellipsis={{ rows: 2 }}>{post.content}</Paragraph>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
