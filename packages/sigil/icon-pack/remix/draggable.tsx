import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Draggable = /* @__PURE__ */ memo(function Draggable(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Draggable
 * @see {@link https://remixicon.com/icon/draggable Remix Icon Docs}
 */
export { Draggable }
