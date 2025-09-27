import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm3 3h10v3h-2v-1h-2v4h1.5v2h-5v-2H11v-4H9v1H7z" />
    </svg>
  )
})
Icon.displayName = 'TextSnippet'
/**
 * Remix Icon: Text Snippet
 * @see {@link https://remixicon.com/icon/text-snippet Remix Icon Docs}
 */
export const TextSnippet = Icon
