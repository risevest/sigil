import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Puzzle2Fill = /* @__PURE__ */ memo(function Puzzle2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 4a3 3 0 1 1 5.83 1H20a1 1 0 0 1 1 1v3.126a1 1 0 0 1-1.25.969 3 3 0 1 0 0 5.811 1 1 0 0 1 1.25.968V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.17C8.06 4.687 8 4.35 8 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Puzzle 2 Fill
 * @see {@link https://remixicon.com/icon/puzzle-2-fill Remix Icon Docs}
 */
export { Puzzle2Fill }
