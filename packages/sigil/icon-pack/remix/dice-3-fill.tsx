import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m7 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-2-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </Svg>
  )
})
Icon.displayName = 'Dice3Fill'
/**
 * Remix Icon: Dice 3 Fill
 * @see {@link https://remixicon.com/icon/dice-3-fill Remix Icon Docs}
 */
export const Dice3Fill = Icon
