import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2zM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12m-7 6h14v2H5z" />
    </svg>
  )
})
Icon.displayName = 'MapPin4Line'
/**
 * Remix Icon: Map Pin 4 Line
 * @see {@link https://remixicon.com/icon/map-pin-4-line Remix Icon Docs}
 */
export const MapPin4Line = Icon
