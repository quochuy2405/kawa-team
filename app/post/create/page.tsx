'use client'
import { MenuEditor, TableCellC } from '@/components/client'
import '@/styles/tiptap.css'
import { LoadingOutlined } from '@ant-design/icons'
import { Color } from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import ListItem from '@tiptap/extension-list-item'
import Table from '@tiptap/extension-table'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Input, Spin } from 'antd'
import { Button } from 'antd/es/radio'
import clsx from 'clsx'
import { useState } from 'react'

const extensions = [
  Table.configure({
    resizable: true
  }),
  TableRow,
  TableHeader,
  TableCellC,
  Image,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] } as any),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    }
  })
]

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
  <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>

`
const PostPage = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const onClose = () => {
    setOpen(false)
  }
  const onOpen = () => {
    setOpen(true)
  }
  return (
    <div className="flex h-screen min-h-dvh w-full flex-col justify-start gap-2 overflow-y-auto bg-slate-100 p-8 lg:flex-row">
      <div className="mx-auto flex h-full w-full flex-col gap-3 lg:w-3/4">
        <Input placeholder="Title" className="h-14 !text-xl font-bold uppercase" />
        <div
          className={clsx('flex flex-1 flex-col overflow-y-auto rounded-lg bg-white p-2', {
            'animate-fade': !loading
          })}
        >
          {loading && (
            <div className="flex h-full w-full items-center justify-center ">
              <Spin
                indicator={
                  <LoadingOutlined style={{ fontSize: 24 }} className="m-auto animate-spin" />
                }
              />
            </div>
          )}

          <EditorProvider
            slotBefore={<MenuEditor open={open} onClose={onClose} />}
            // editable={false}

            extensions={extensions}
            content={content}
            onCreate={() => {
              setLoading(false)
            }}
          >
            <></>
          </EditorProvider>
        </div>
      </div>
      <Button onClick={onOpen} className="w-fit">
        Preview
      </Button>
    </div>
  )
}
export default PostPage
