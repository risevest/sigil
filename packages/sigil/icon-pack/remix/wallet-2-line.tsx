import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.005 7V5h-16v14h16v-2h-8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-17-4h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 6v6h7V9zm2 2h3v2h-3z" />
    </Svg>
  )
})
Icon.displayName = 'Wallet2Line'
/**
 * Remix Icon: Wallet 2 Line
 * @see {@link https://remixicon.com/icon/wallet-2-line Remix Icon Docs}
 */
export const Wallet2Line = Icon
