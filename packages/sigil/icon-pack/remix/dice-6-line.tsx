import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Dice6Line = /* @__PURE__ */ memo(function Dice6Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 5v14H5V5zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm4 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6-8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Dice 6 Line
 * @see {@link https://remixicon.com/icon/dice-6-line Remix Icon Docs}
 */
export { Dice6Line }
