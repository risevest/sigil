import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22.005 8h-9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9v4a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 3h3v2h-3z" />
    </Svg>
  )
})
Icon.displayName = 'Wallet2Fill'
/**
 * Remix Icon: Wallet 2 Fill
 * @see {@link https://remixicon.com/icon/wallet-2-fill Remix Icon Docs}
 */
export const Wallet2Fill = Icon
