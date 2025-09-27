import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 3v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0V3zM4 20h16v2H4z" />
    </svg>
  )
})
Icon.displayName = 'Underline'
/**
 * Remix Icon: Underline
 * @see {@link https://remixicon.com/icon/underline Remix Icon Docs}
 */
export const Underline = Icon
