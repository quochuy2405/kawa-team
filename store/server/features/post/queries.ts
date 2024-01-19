import { useQuery } from '@tanstack/react-query'

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const getPost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export const useGetPosts = () =>
  useQuery({
    queryKey: ['post'],
    queryFn: getPosts
  })
export const useGetPost = (postId: number) =>
  useQuery({
    queryKey: ['post', postId],
    queryFn: async () => await getPost(postId)
  })
