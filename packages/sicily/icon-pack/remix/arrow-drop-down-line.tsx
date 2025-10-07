import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 15-4.243-4.242 1.415-1.414L12 12.172l2.828-2.828 1.415 1.414z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDropDownLine'
/**
 * Remix Icon: Arrow Drop Down Line
 * @see {@link https://remixicon.com/icon/arrow-drop-down-line Remix Icon Docs}
 */
export const ArrowDropDownLine = Icon
