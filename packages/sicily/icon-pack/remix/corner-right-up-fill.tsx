import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 19H5v-2h7V9.414H6.586L13 3l6.414 6.414H14z" />
    </svg>
  )
})
Icon.displayName = 'CornerRightUpFill'
/**
 * Remix Icon: Corner Right Up Fill
 * @see {@link https://remixicon.com/icon/corner-right-up-fill Remix Icon Docs}
 */
export const CornerRightUpFill = Icon
