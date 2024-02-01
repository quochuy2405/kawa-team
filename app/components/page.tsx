import { CardWithMedia, CardWithoutMedia, TextField } from '@/components/servers'
import { WarningOutlined } from '@ant-design/icons'

const CompnentPage = () => {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      <CardWithMedia />
      <CardWithMedia mode="vertical" />
      <CardWithMedia deepButton="hidden" />
      <CardWithMedia mode="vertical" deepButton="hidden" />
      <CardWithMedia deepLink="aaa" deepButton="hidden" />
      <CardWithMedia mode="vertical" deepLink="aaa" deepButton="hidden" />
      <hr />
      <CardWithMedia imageFullFill />
      <CardWithMedia mode="vertical" />
      <CardWithMedia deepButton="hidden" imageFullFill />
      <CardWithMedia mode="vertical" deepButton="hidden" />
      <CardWithMedia deepLink="aaa" deepButton="hidden" imageFullFill />
      <CardWithMedia mode="vertical" deepLink="aaa" deepButton="hidden" />
      <hr />
      <CardWithoutMedia />
      <CardWithoutMedia mode="vertical" />
      <CardWithoutMedia mode="vertical" deepButton="hidden" />
      <CardWithoutMedia mode="vertical" deepLink="aaa" deepButton="hidden" />
      <hr />
      <TextField title="Label" />
      <TextField title="Label" status="warning" prefix={<WarningOutlined />} />
      <TextField title="Label" status="error" prefix={<WarningOutlined />} />
      <TextField title="Label" />
    </div>
  )
}

export default CompnentPage
