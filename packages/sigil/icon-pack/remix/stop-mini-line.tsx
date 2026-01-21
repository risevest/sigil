import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StopMiniLine = /* @__PURE__ */ memo(function StopMiniLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 1v8h8V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Stop Mini Line
 * @see {@link https://remixicon.com/icon/stop-mini-line Remix Icon Docs}
 */
export { StopMiniLine }
