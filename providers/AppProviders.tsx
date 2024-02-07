'use client'

import { theme } from '@/configs/theme.config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ConfigProvider } from 'antd'
import React from 'react'

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers
