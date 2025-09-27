import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-14.243-4.243 4.243 4.243 4.242 4.242-4.242z" />
    </svg>
  )
})
Icon.displayName = 'CopperCoinFill'
/**
 * Remix Icon: Copper Coin Fill
 * @see {@link https://remixicon.com/icon/copper-coin-fill Remix Icon Docs}
 */
export const CopperCoinFill = Icon
