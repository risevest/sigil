import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.036 10.734a2 2 0 0 0 0 2.533l7.19 8.787a1 1 0 0 0 1.548 0l7.19-8.787a2 2 0 0 0 0-2.533l-7.19-8.788a1 1 0 0 0-1.548 0zM12 4.158 18.416 12 12 19.842 5.584 12z" />
    </svg>
  )
})
Icon.displayName = 'PokerDiamondsLine'
/**
 * Remix Icon: Poker Diamonds Line
 * @see {@link https://remixicon.com/icon/poker-diamonds-line Remix Icon Docs}
 */
export const PokerDiamondsLine = Icon
