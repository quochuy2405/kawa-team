import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AddPostData } from './interfaces'

const addPost = async (body: AddPostData) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

export const useAddPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['posts'],
    mutationFn: addPost,
    onSuccess: (data) => {
      queryClient.setQueryData(['posts', { id: data.id }], (oldData) =>
        oldData
          ? {
              ...oldData,
              title: data.title
            }
          : oldData
      )
    }
  })
}
