import { ThemeConfig } from 'antd'

const components: ThemeConfig['components'] = {
  Button: {
    colorPrimary: '#1A1A1A',
    lineWidth: 2,
    fontSize: 12,
    primaryShadow: 'none'
  }
}
const token: ThemeConfig['token'] = { borderRadius: 6, colorPrimary: '#1A1A1A' }
export const theme: ThemeConfig = { components, token }
