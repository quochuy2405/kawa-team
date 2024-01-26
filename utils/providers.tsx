'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ConfigProvider } from 'antd'
import React from 'react'
type ThemeData = {
  borderRadius: number
  colorPrimary: string
  Button?: {
    colorPrimary: string
    algorithm?: boolean
  }
}

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient())
  const defaultData: ThemeData = {
    borderRadius: 6,
    colorPrimary: '#B19470',
    Button: {
      colorPrimary: '#B19470'
    }
  }
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: defaultData.colorPrimary,
                borderRadius: defaultData.borderRadius
              },
              components: {
                Button: {
                  colorPrimary: defaultData.Button?.colorPrimary,
                  algorithm: defaultData.Button?.algorithm
                }
              }
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers
