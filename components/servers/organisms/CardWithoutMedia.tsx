import { EyeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface CardWithMediaProps {
  mode?: 'horizontal' | 'vertical'
  deepButton?: 'visible' | 'hidden'
  deepLink?: string
}
const CardWithMedia: React.FC<CardWithMediaProps> = ({
  deepLink,
  mode = 'horizontal',
  deepButton = 'visible'
}) => {
  switch (mode) {
    case 'vertical':
      return (
        <div className="flex h-fit w-[420px] flex-col items-start overflow-hidden rounded-[4px] shadow-[0_0_8px_0_#e3e3e3]">
          <div className="flex flex-1 flex-col p-3">
            <h2 className="text-lg font-semibold">Card Title</h2>
            <p className="line-clamp-2 text-xs opacity-80">
              Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus
              imperdiet nisi.
            </p>
          </div>

          {deepButton === 'visible' && (
            <div className="flex h-fit w-full items-end justify-between gap-2 p-3 pt-0">
              <div className="flex items-center justify-center gap-1 text-xs opacity-70">
                <EyeOutlined size={10} /> <span className="text-center text-[10px]">100K</span>
              </div>
              <div className="flex gap-2">
                <Button type="primary" size="small" className="!h-6 !px-4" ghost>
                  Cancel
                </Button>
                <Button type="primary" size="small" className="!h-6 !px-4">
                  Submit
                </Button>
              </div>
            </div>
          )}
          {deepLink && (
            <Link className="p-2 pt-0 text-xs font-bold underline" href={deepLink}>
              Link text
            </Link>
          )}
        </div>
      )

    default:
      return (
        <div className="flex h-fit w-[240px] flex-col overflow-hidden rounded-[4px] shadow-[0_0_8px_0_#e3e3e3]">
          <div className="flex h-fit flex-col gap-3 p-3">
            <div className="flex flex-1 flex-col">
              <h2 className="text-lg font-semibold">Card Title</h2>
              <p className="line-clamp-2 text-xs opacity-80">
                Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                rhoncus imperdiet nisi.
              </p>
            </div>
            {deepButton === 'visible' && (
              <div className="flex h-fit items-end justify-between gap-2">
                <div className="flex items-center justify-center gap-1 text-xs opacity-70">
                  <EyeOutlined size={10} /> <span className="text-center text-[10px]">100K</span>
                </div>
                <div className="flex gap-2">
                  <Button type="primary" size="small" className="!h-6 !px-4" ghost>
                    Cancel
                  </Button>
                  <Button type="primary" size="small" className="!h-6 !px-4">
                    Submit
                  </Button>
                </div>
              </div>
            )}
            {deepLink && (
              <Link className="text-xs font-bold underline" href={deepLink}>
                Link text
              </Link>
            )}
          </div>
        </div>
      )
  }
}

export default CardWithMedia
