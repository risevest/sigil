import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StopMiniFill = /* @__PURE__ */ memo(function StopMiniFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 7v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1" />
    </Svg>
  )
})
/**
 * Remix Icon: Stop Mini Fill
 * @see {@link https://remixicon.com/icon/stop-mini-fill Remix Icon Docs}
 */
export { StopMiniFill }
