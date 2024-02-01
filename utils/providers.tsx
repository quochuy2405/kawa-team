'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ConfigProvider, ThemeConfig } from 'antd'
import React from 'react'

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient())
  const components: ThemeConfig['components'] = {
    Button: {
      colorPrimary: '#1A1A1A',
      lineWidth: 2,
      fontSize: 12,
      primaryShadow: 'none'
    }
  }
  const token: ThemeConfig['token'] = { borderRadius: 6, colorPrimary: '#1A1A1A' }
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <ConfigProvider
          theme={{
            token,
            components
          }}
        >
          {children}
        </ConfigProvider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers
