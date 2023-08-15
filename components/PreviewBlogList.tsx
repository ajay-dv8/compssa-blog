'use client'

import {useLiveQuery} from 'next-sanity/preview'
import { query } from '@/app/(user)/page'
import { Post } from '@/typings'
import BlogList from './BlogList'

type previewDocType={
  data: string
  post: Post[] | any
}
export default function PreviewBlogList({data: initialData}: previewDocType) {
  const [post, loading] = useLiveQuery(initialData, query)

  if (loading) {
    return (
      <>
        <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
          Loading preview data...
        </p>
      </>
    )
  }
  
  return <BlogList post={post} />
}