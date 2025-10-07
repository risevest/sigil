import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm4 15h14v2H7zm-4-5h18v2H3zm4-5h14v2H7z" />
    </svg>
  )
})
Icon.displayName = 'AlignRight'
/**
 * Remix Icon: Align Right
 * @see {@link https://remixicon.com/icon/align-right Remix Icon Docs}
 */
export const AlignRight = Icon
