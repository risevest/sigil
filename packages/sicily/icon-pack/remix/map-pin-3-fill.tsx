import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2z" />
    </svg>
  )
})
Icon.displayName = 'MapPin3Fill'
/**
 * Remix Icon: Map Pin 3 Fill
 * @see {@link https://remixicon.com/icon/map-pin-3-fill Remix Icon Docs}
 */
export const MapPin3Fill = Icon
