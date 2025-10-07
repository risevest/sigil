import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 14-4-4h8z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDropDownFill'
/**
 * Remix Icon: Arrow Drop Down Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-down-fill Remix Icon Docs}
 */
export const ArrowDropDownFill = Icon
