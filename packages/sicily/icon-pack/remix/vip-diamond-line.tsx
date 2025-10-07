import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.878 3.003h14.254a1 1 0 0 1 .809.412l3.822 5.256a.5.5 0 0 1-.037.633l-11.354 12.3a.5.5 0 0 1-.706.029q-.01-.01-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256a1 1 0 0 1 .809-.412m.509 2-2.8 3.849 9.418 10.202 9.417-10.202-2.8-3.85z" />
    </svg>
  )
})
Icon.displayName = 'VipDiamondLine'
/**
 * Remix Icon: Vip Diamond Line
 * @see {@link https://remixicon.com/icon/vip-diamond-line Remix Icon Docs}
 */
export const VipDiamondLine = Icon
