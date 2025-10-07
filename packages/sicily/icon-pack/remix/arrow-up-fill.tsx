import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 12v8h-2v-8H4l8-8 8 8z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpFill'
/**
 * Remix Icon: Arrow Up Fill
 * @see {@link https://remixicon.com/icon/arrow-up-fill Remix Icon Docs}
 */
export const ArrowUpFill = Icon
