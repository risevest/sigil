import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 14.656 2.816 1.72-.765-3.21 2.506-2.147-3.29-.264L12 7.708zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.865.55-5.23 4.48 1.598 6.7z" />
    </svg>
  )
})
Icon.displayName = 'StarHalfSFill'
/**
 * Remix Icon: Star Half S Fill
 * @see {@link https://remixicon.com/icon/star-half-s-fill Remix Icon Docs}
 */
export const StarHalfSFill = Icon
