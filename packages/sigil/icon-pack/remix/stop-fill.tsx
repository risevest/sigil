import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StopFill = /* @__PURE__ */ memo(function StopFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Stop Fill
 * @see {@link https://remixicon.com/icon/stop-fill Remix Icon Docs}
 */
export { StopFill }
