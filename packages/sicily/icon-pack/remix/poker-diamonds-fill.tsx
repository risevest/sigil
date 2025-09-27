import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m4.036 10.734 7.19-8.788a1 1 0 0 1 1.548 0l7.19 8.788a2 2 0 0 1 0 2.533l-7.19 8.787a1 1 0 0 1-1.548 0l-7.19-8.787a2 2 0 0 1 0-2.533" />
    </svg>
  )
})
Icon.displayName = 'PokerDiamondsFill'
/**
 * Remix Icon: Poker Diamonds Fill
 * @see {@link https://remixicon.com/icon/poker-diamonds-fill Remix Icon Docs}
 */
export const PokerDiamondsFill = Icon
