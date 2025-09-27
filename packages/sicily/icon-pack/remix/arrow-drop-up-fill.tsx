import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 10 4 4H8z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDropUpFill'
/**
 * Remix Icon: Arrow Drop Up Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-up-fill Remix Icon Docs}
 */
export const ArrowDropUpFill = Icon
