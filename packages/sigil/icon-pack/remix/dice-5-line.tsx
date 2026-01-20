import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Dice5Line = /* @__PURE__ */ memo(function Dice5Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5v14h14V5zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Dice 5 Line
 * @see {@link https://remixicon.com/icon/dice-5-line Remix Icon Docs}
 */
export { Dice5Line }
