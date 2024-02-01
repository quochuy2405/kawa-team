'use client'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { OneTap, SignInGoogle } from '../atoms'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-between gap-6 bg-black px-3">
      <div className="flex items-center justify-center gap-6">
        <div className="relative">
          <h1 className="text-3xl font-extrabold uppercase text-blue-700">Kawa</h1>
          <span className="absolute top-8 text-[9px] font-semibold text-red-500">
            Paper,blogger
          </span>
        </div>

        <ul className="flex gap-8 text-xs font-normal text-white">
          <Link href="/introduce">Introduce</Link>
          <Link href="/papers">Papers</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/models">Models</Link>
          <Link href="/contacts">Contacts</Link>
        </ul>
      </div>

      <div className="flex items-center justify-center gap-6">
        <Input
          placeholder="Search Blogs, Models, Papers..."
          size="middle"
          addonAfter={
            <SearchOutlined className="hover:text-blue-700" onClick={() => console.log('search')} />
          }
          variant="borderless"
          className="!w-96 rounded-full border !text-xs"
          // onSearch={onSearch}
        />
        <SignInGoogle />
      </div>
      <OneTap />
    </div>
  )
}

export default Header
