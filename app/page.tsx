'use client'

import { useAddPost } from '@/store/server/features/post/mutations'
import { useGetPosts } from '@/store/server/features/post/queries'

export default function Home() {
  const { isLoading: isGetPostsLoading, data: getPostsData } = useGetPosts()
  const addPost = useAddPost()
  return (
    <div className="App">
      <button
        onClick={() =>
          addPost.mutate({
            id: 1,
            userId: 10,
            title: 'test',
            body: 'test'
          })
        }
      >
        Add New Post
      </button>
      <hr />
      <div>
        {isGetPostsLoading ? (
          <p>Loading...</p>
        ) : (
          getPostsData?.map((post: any) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
