import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 8.5a5.5 5.5 0 0 1 10-3.163A5.5 5.5 0 0 1 22 8.5c0 7.5-10 12.985-10 12.985S2 16 2 8.5" />
    </Svg>
  )
})
Icon.displayName = 'PokerHeartsFill'
/**
 * Remix Icon: Poker Hearts Fill
 * @see {@link https://remixicon.com/icon/poker-hearts-fill Remix Icon Docs}
 */
export const PokerHeartsFill = Icon
