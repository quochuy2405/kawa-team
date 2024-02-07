'use server'
import { cookies } from 'next/headers'

export const setCookiesHttpsOnly = async (name: string, value: string, path = '*') => {
  cookies().set({
    httpOnly: true,
    name,
    value,
    path
  })
}
export const getCookiesHttpsOnly = async (name: string) => {
  return cookies().get(name)
}
