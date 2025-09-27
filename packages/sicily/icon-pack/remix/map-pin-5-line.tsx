import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 18.485 4.243-4.242a6 6 0 1 0-8.486 0zm5.657-2.828L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z" />
    </svg>
  )
})
Icon.displayName = 'MapPin5Line'
/**
 * Remix Icon: Map Pin 5 Line
 * @see {@link https://remixicon.com/icon/map-pin-5-line Remix Icon Docs}
 */
export const MapPin5Line = Icon
