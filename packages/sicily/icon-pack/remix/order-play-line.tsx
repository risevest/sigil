import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 4V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H2V4zM2 18h20v2H2zm0-7h20v2H2z" />
    </svg>
  )
})
Icon.displayName = 'OrderPlayLine'
/**
 * Remix Icon: Order Play Line
 * @see {@link https://remixicon.com/icon/order-play-line Remix Icon Docs}
 */
export const OrderPlayLine = Icon
