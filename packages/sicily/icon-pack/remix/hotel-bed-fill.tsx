import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  )
})
Icon.displayName = 'HotelBedFill'
/**
 * Remix Icon: Hotel Bed Fill
 * @see {@link https://remixicon.com/icon/hotel-bed-fill Remix Icon Docs}
 */
export const HotelBedFill = Icon
