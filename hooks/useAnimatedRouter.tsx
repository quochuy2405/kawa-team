'use client'
import { useRouter } from 'next/navigation'

export default function useAnimatedRouter() {
  const router = useRouter()
  const viewTransitionsStatus = () => {
    try {
      if (!document) return
      const extendedDocument = document as any
      let status = "Opss, Your browser doesn't support View Transitions API"
      if (extendedDocument?.startViewTransition) {
        status = 'Yess, Your browser support View Transitions API'
      }
    } catch (error) {}
  }
  // Navigate to the new route
  const animatedRoute = (url: string) => {
    const extendedDocument = document as any
    if (!extendedDocument.startViewTransition) {
      return router.push(url)
    } else {
      extendedDocument.startViewTransition(() => {
        router.push(url)
      })
    }
  }
  return { animatedRoute, viewTransitionsStatus }
}
