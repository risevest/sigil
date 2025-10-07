import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m3.005 7 8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm7 2.93a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </svg>
  )
})
Icon.displayName = 'PriceTagLine'
/**
 * Remix Icon: Price Tag Line
 * @see {@link https://remixicon.com/icon/price-tag-line Remix Icon Docs}
 */
export const PriceTagLine = Icon
