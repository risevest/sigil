import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 5H5v2h7v10.172l-3.95-3.95-1.414 1.414L13 21l6.364-6.364-1.414-1.414-3.95 3.95z" />
    </svg>
  )
})
Icon.displayName = 'CornerRightDownLine'
/**
 * Remix Icon: Corner Right Down Line
 * @see {@link https://remixicon.com/icon/corner-right-down-line Remix Icon Docs}
 */
export const CornerRightDownLine = Icon
