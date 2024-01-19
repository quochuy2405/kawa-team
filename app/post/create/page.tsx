'use client'

import '@/styles/tiptap.css'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className="mb-5 flex px-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('bold')
          }
        )}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('italic')
          }
        )}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('strike')
          }
        )}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('code')
          }
        )}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>clear nodes</button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('paragraph')
          }
        )}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('heading', { level: 1 })
          }
        )}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('heading', { level: 2 })
          }
        )}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('heading', { level: 3 })
          }
        )}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('heading', { level: 4 })
          }
        )}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('heading', { level: 5 })
          }
        )}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('heading', { level: 6 })
          }
        )}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('bulletList')
          }
        )}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('orderedList')
          }
        )}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('codeBlock')
          }
        )}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('blockquote')
          }
        )}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>hard break</button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={clsx(
          'flex h-5 w-fit items-center justify-center rounded-sm bg-black p-4 text-white',
          {
            'bg-red-500': editor.isActive('purple')
          }
        )}
      >
        purple
      </button>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
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
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`
const PostPage = () => (
  <EditorProvider
    slotBefore={<MenuBar />}
    editable={false}
    extensions={extensions}
    content={content}
  >
    <></>
  </EditorProvider>
)
export default PostPage
