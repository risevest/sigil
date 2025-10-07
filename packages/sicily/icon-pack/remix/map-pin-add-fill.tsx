import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.364 17.364 12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0M11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z" />
    </svg>
  )
})
Icon.displayName = 'MapPinAddFill'
/**
 * Remix Icon: Map Pin Add Fill
 * @see {@link https://remixicon.com/icon/map-pin-add-fill Remix Icon Docs}
 */
export const MapPinAddFill = Icon
