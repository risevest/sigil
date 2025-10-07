import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 5H5v2h7v7.586H6.586L13 21l6.414-6.414H14z" />
    </svg>
  )
})
Icon.displayName = 'CornerRightDownFill'
/**
 * Remix Icon: Corner Right Down Fill
 * @see {@link https://remixicon.com/icon/corner-right-down-fill Remix Icon Docs}
 */
export const CornerRightDownFill = Icon
