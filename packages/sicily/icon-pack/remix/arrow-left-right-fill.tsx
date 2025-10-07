import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16 16v-4l5 5-5 5v-4H4v-2zM8 2v3.999L20 6v2H8v4L3 7z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftRightFill'
/**
 * Remix Icon: Arrow Left Right Fill
 * @see {@link https://remixicon.com/icon/arrow-left-right-fill Remix Icon Docs}
 */
export const ArrowLeftRightFill = Icon
