import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 23.728-6.364-6.364a9 9 0 1 1 12.728 0zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </svg>
  )
})
Icon.displayName = 'MapPin2Line'
/**
 * Remix Icon: Map Pin 2 Line
 * @see {@link https://remixicon.com/icon/map-pin-2-line Remix Icon Docs}
 */
export const MapPin2Line = Icon
