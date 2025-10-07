import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 10.5H5v-7h2l2 2 2-2h2v7h-2v-4l-2 2-2-2zm11-3h2l-3 3-3-3h2v-4h2z" />
    </svg>
  )
})
Icon.displayName = 'MarkdownLine'
/**
 * Remix Icon: Markdown Line
 * @see {@link https://remixicon.com/icon/markdown-line Remix Icon Docs}
 */
export const MarkdownLine = Icon
