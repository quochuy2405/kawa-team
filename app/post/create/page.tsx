'use client'
import { MenuEditor, TableCellC } from '@/components/client'
import '@/styles/tiptap.css'
import '@/styles/space.css'
import { LoadingOutlined } from '@ant-design/icons'
import { Color } from '@tiptap/extension-color'
import Dropcursor from '@tiptap/extension-dropcursor'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import ListItem from '@tiptap/extension-list-item'
import Table from '@tiptap/extension-table'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { Spin } from 'antd'
import { Button } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
const CustomDocument = Document.extend({
  content: 'heading block*'
})
const extensions = [
  TableRow,
  TableHeader,
  TableCellC,
  Image,
  Dropcursor,
  Highlight,
  CustomDocument,
  Table.configure({
    resizable: true
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph']
  }),
  Placeholder.configure({
    placeholder: ({ node }) => {
      if (node.type.name === 'heading') {
        return 'What’s the title?'
      }

      return 'Write...'
    }
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] } as any),
  StarterKit.configure({
    document: false,
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

const content = ``
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
    <div className="flex h-screen min-h-dvh w-full flex-col justify-start gap-2 overflow-y-auto bg-black px-8 py-2 lg:flex-row">
      <span className="space"></span>
      <div className="mx-auto flex h-full w-full flex-col gap-3 lg:w-3/4">
        <div
          className={clsx('flex flex-1 flex-col overflow-hidden rounded-lg bg-white p-2', {
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
      <Button onClick={onOpen}>Preview</Button>
    </div>
  )
}
export default PostPage
