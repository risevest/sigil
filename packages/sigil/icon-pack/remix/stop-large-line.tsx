import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StopLargeLine = /* @__PURE__ */ memo(function StopLargeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5h14v14H5zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Stop Large Line
 * @see {@link https://remixicon.com/icon/stop-large-line Remix Icon Docs}
 */
export { StopLargeLine }
