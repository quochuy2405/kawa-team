import { Input, InputProps, Typography } from 'antd'
import React from 'react'
interface TextFieldProps extends InputProps {}
const TextField: React.FC<TextFieldProps> = ({ title, ...rest }) => {
  return (
    <div className="flex flex-1 flex-col gap-1">
      {!!title && <span className="text-xs font-semibold">{title}</span>}

      <Input {...rest} />
    </div>
  )
}

export default TextField
