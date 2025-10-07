import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2zM12 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
    </svg>
  )
})
Icon.displayName = 'MapPin3Line'
/**
 * Remix Icon: Map Pin 3 Line
 * @see {@link https://remixicon.com/icon/map-pin-3-line Remix Icon Docs}
 */
export const MapPin3Line = Icon
