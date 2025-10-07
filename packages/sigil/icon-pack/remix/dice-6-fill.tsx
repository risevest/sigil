import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm4 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </Svg>
  )
})
Icon.displayName = 'Dice6Fill'
/**
 * Remix Icon: Dice 6 Fill
 * @see {@link https://remixicon.com/icon/dice-6-fill Remix Icon Docs}
 */
export const Dice6Fill = Icon
