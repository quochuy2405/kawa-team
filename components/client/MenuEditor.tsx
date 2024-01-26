'use client'

import {
  BoldOutlined,
  CodeOutlined,
  ItalicOutlined,
  OrderedListOutlined,
  RedoOutlined,
  StrikethroughOutlined,
  UndoOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'
import { useCurrentEditor } from '@tiptap/react'
import { Button, ColorPicker, Drawer, Space } from 'antd'
import clsx from 'clsx'
import { AiOutlineMergeCells, AiOutlineSplitCells } from 'react-icons/ai'
import { BsTable } from 'react-icons/bs'
import { FcAddColumn, FcAddRow, FcDeleteColumn, FcDeleteRow } from 'react-icons/fc'
import { TbTableRow } from 'react-icons/tb'
import { FaHighlighter } from 'react-icons/fa'

type LevelType = 1 | 2 | 3 | 4 | 5 | 6
const headings: Array<{ key: string; level: LevelType }> = [
  { key: 'H1', level: 1 },
  { key: 'H2', level: 2 },
  { key: 'H3', level: 3 },
  { key: 'H4', level: 4 },
  { key: 'H5', level: 5 },
  { key: 'H6', level: 6 }
]
interface MenuBarProps {
  open: boolean
  onClose: () => void
}
const MenuBar: React.FC<MenuBarProps> = ({ open, onClose }) => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <>
      <Drawer
        title="Preview"
        placement={'bottom'}
        onClose={onClose}
        height="100%"
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div
          className="tiptap m-auto w-3/4"
          dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
        ></div>
      </Drawer>
      <div className="menu-edit sticky top-0 z-10 mb-5 flex flex-wrap gap-2 divide-x-2 border-b-2 bg-white px-4 pb-2">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-xs font-medium">Font</h2>
          <div className="flex gap-1">
            <button
              aria-label="bold"
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={clsx('flex h-5 w-fit items-center justify-center p-4 text-black', {
                'bg-black !text-white': editor.isActive('bold')
              })}
            >
              <BoldOutlined />
            </button>
            <button
              aria-label="italic"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={clsx(
                'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black',
                {
                  'bg-black !text-white': editor.isActive('italic')
                }
              )}
            >
              <ItalicOutlined />
            </button>
            <button
              aria-label="strike"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
              className={clsx(
                'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black',
                {
                  'bg-black !text-white': editor.isActive('strike')
                }
              )}
            >
              <StrikethroughOutlined />
            </button>{' '}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-1 px-2">
              <button
                className={clsx(
                  'group flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black hover:bg-black hover:text-white'
                )}
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
              >
                <svg
                  width={20}
                  height={20}
                  className="group-hover:fill-white"
                  viewBox="0 0 32 32"
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_iconCarrier">
                    <defs>
                      <style dangerouslySetInnerHTML={{ __html: '.cls-1{fill:none;}' }} />
                    </defs>
                    <title>erase</title>
                    <rect x={7} y={27} width={23} height={2} />
                    <path
                      d="M27.38,10.51,19.45,2.59a2,2,0,0,0-2.83,0l-14,14a2,2,0,0,0,0,2.83L7.13,24h9.59L27.38,13.34A2,2,0,0,0,27.38,10.51ZM15.89,22H8L4,18l6.31-6.31,7.93,7.92Zm3.76-3.76-7.92-7.93L18,4,26,11.93Z"
                      transform="translate(0 0)"
                    />
                    <rect
                      id="_Transparent_Rectangle_"
                      data-name="<Transparent Rectangle>"
                      className="cls-1"
                      width={32}
                      height={32}
                    />
                  </g>
                </svg>
              </button>
              <button
                aria-label="line"
                className={clsx(
                  'group flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black hover:bg-black hover:text-white disabled:opacity-10'
                )}
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
              >
                <UndoOutlined />
              </button>
              <button
                aria-label="line"
                className={clsx(
                  'group flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black hover:bg-black hover:text-white disabled:opacity-10'
                )}
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
              >
                <RedoOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-xs font-medium">Table</h2>
            <div className="flex gap-1 px-2">
              <div className="flex gap-2 px-2">
                <div className="flex flex-col items-center">
                  <h2 className="text-xs font-medium">New</h2>
                  <button
                    aria-label="list"
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .insertTable({ rows: 2, cols: 2, withHeaderRow: true })
                        .run()
                    }
                    className={clsx(
                      'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black'
                    )}
                  >
                    <BsTable size={16} />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-xs font-medium">Header</h2>
                  <button
                    aria-label="list"
                    onClick={() => editor.chain().focus().toggleHeaderCell().run()}
                    disabled={!editor.can().toggleHeaderCell()}
                    className={clsx(
                      'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black disabled:opacity-10'
                    )}
                  >
                    <TbTableRow size={16} />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-xs font-medium">Highlight</h2>
                  <button
                    aria-label="list"
                    onClick={() => {
                      if (editor.can().setCellAttribute('backgroundColor', '#FAF594')) {
                        editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()
                      } else {
                        editor.chain().focus().setCellAttribute('backgroundColor', '#FFFFFF').run()
                      }
                    }}
                    className={clsx(
                      'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black disabled:opacity-10'
                    )}
                  >
                    <FaHighlighter size={16} />
                  </button>
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col items-center gap-1">
                  <h2 className="items-center justify-center whitespace-nowrap text-xs font-medium ">
                    Top - Left
                  </h2>
                  <div className="flex gap-1">
                    <button
                      onClick={() => editor.chain().focus().addRowBefore().run()}
                      disabled={!editor.can().addRowBefore()}
                      aria-label="orderlist"
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <FcAddRow size={20} />
                    </button>
                    <button
                      aria-label="orderlist"
                      onClick={() => editor.chain().focus().addColumnBefore().run()}
                      disabled={!editor.can().addColumnBefore()}
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <FcAddColumn size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h2 className="items-center justify-center whitespace-nowrap text-xs font-medium">
                    Bottom - Right
                  </h2>
                  <div className="flex gap-1">
                    <button
                      aria-label="orderlist"
                      onClick={() => editor.chain().focus().addColumnAfter().run()}
                      disabled={!editor.can().addColumnAfter()}
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <FcAddRow size={20} />
                    </button>
                    <button
                      aria-label="orderlist"
                      onClick={() => editor.chain().focus().addRowAfter().run()}
                      disabled={!editor.can().addRowAfter()}
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <FcAddColumn size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col items-center gap-1">
                  <h2 className="items-center justify-center text-xs font-medium">Remove</h2>
                  <div className="flex gap-1">
                    <button
                      aria-label="orderlist"
                      onClick={() => editor.chain().focus().deleteRow().run()}
                      disabled={!editor.can().deleteRow()}
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <FcDeleteRow size={20} />
                    </button>
                    <button
                      aria-label="orderlist"
                      onClick={() => editor.chain().focus().deleteColumn().run()}
                      disabled={!editor.can().deleteColumn()}
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <FcDeleteColumn size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h2 className="items-center justify-center text-xs font-medium">Cell</h2>
                  <div className="flex gap-1">
                    <button
                      aria-label="orderlist"
                      onClick={() => editor.chain().focus().mergeCells().run()}
                      disabled={!editor.can().mergeCells()}
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <AiOutlineMergeCells size={20} />
                    </button>
                    <button
                      aria-label="orderlist"
                      onClick={() => editor.chain().focus().splitCell().run()}
                      disabled={!editor.can().splitCell()}
                      className={clsx(
                        'flex h-5 w-fit items-center justify-center rounded-sm p-4 px-2 text-black disabled:opacity-10'
                      )}
                    >
                      <AiOutlineSplitCells size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between divide-x-2">
            <div className="m-auto flex w-fit flex-col items-center gap-1 px-2">
              <h2 className="text-xs font-medium">Size</h2>
              <div className="flex min-w-[100px] uppercase">
                {headings.map((heading) => (
                  <button
                    aria-label={heading.key}
                    className={clsx(
                      'flex h-5 w-fit items-center justify-center rounded-sm px-2 py-4 text-black',
                      {
                        'bg-black !text-white': editor.isActive('heading', { level: heading.level })
                      }
                    )}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: heading.level }).run()
                    }
                    key={heading.level}
                  >
                    {heading.key}
                  </button>
                ))}
              </div>
            </div>
            <div className="m-auto flex w-fit flex-col items-center gap-1 px-2">
              <h2 className="text-xs font-medium">Style</h2>
              <div className="flex">
                <button
                  aria-label="code"
                  onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                  className={clsx(
                    'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black',
                    {
                      'bg-black !text-white': editor.isActive('codeBlock')
                    }
                  )}
                >
                  <CodeOutlined />
                </button>

                <button
                  className={clsx(
                    'group flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black hover:bg-black hover:text-white'
                  )}
                  aria-label="quote"
                  onClick={() => editor.chain().focus().setHorizontalRule().run()}
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:fill-white"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                          <rect width={48} height={48} fill="none" />
                        </g>
                        <g id="Q3_icons" data-name="Q3 icons">
                          <g>
                            <path d="M42,22H6a2,2,0,0,0,0,4H42a2,2,0,0,0,0-4Z" />
                            <path d="M22.6,17.4a1.9,1.9,0,0,0,2.8,0l6-5.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2L26,11.2V4a2,2,0,0,0-4,0v7.2L19.4,8.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7Z" />
                            <path d="M25.4,30.6a1.9,1.9,0,0,0-2.8,0l-6,5.9a2.1,2.1,0,0,0-.2,2.7,1.9,1.9,0,0,0,3,.2L22,36.8V44a2,2,0,0,0,4,0V36.8l2.6,2.6a1.9,1.9,0,0,0,3-.2,2.1,2.1,0,0,0-.2-2.7Z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <button
                  aria-label="line"
                  className={clsx(
                    'group flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black hover:bg-black hover:text-white'
                  )}
                  onClick={() => editor.chain().focus().setHardBreak().run()}
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:fill-white"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                          <rect width={48} height={48} fill="none" />
                        </g>
                        <g id="Layer_7" data-name="Layer 7">
                          <g>
                            <path d="M4,13H44a2,2,0,0,0,0-4H4a2,2,0,0,0,0,4Z" />
                            <path d="M18,33H4a2,2,0,0,0,0,4H18a2,2,0,0,0,0-4Z" />
                            <path d="M38,21H4a2,2,0,0,0,0,4H38a4,4,0,0,1,0,8H30.8l2.6-2.6a2,2,0,0,0-2.8-2.8l-6,6a1.9,1.9,0,0,0,0,2.8l6,6a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L30.8,37H38a8,8,0,0,0,0-16Z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>

                <button
                  aria-label="line"
                  className={clsx(
                    'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black'
                  )}
                >
                  <ColorPicker
                    onChangeComplete={(e) => {
                      editor.chain().focus().setColor(e.toHexString()).run()
                    }}
                    defaultValue="#000000"
                    size="small"
                    allowClear
                    placement="topLeft"
                    showText
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xs font-medium">Element</h2>
          <div className="flex px-2">
            <button
              aria-label="list"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={clsx(
                'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black',
                {
                  'bg-black !text-white': editor.isActive('bulletList')
                }
              )}
            >
              <UnorderedListOutlined />
            </button>
            <button
              aria-label="orderlist"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={clsx(
                'flex h-5 w-fit items-center justify-center rounded-sm p-4 text-black',
                {
                  'bg-black !text-white': editor.isActive('orderedList')
                }
              )}
            >
              <OrderedListOutlined />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default MenuBar
