import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m14 12-4 4V8z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDropRightFill'
/**
 * Remix Icon: Arrow Drop Right Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-right-fill Remix Icon Docs}
 */
export const ArrowDropRightFill = Icon
