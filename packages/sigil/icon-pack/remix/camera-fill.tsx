import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CameraFill = /* @__PURE__ */ memo(function CameraFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
    </Svg>
  )
})
/**
 * Remix Icon: Camera Fill
 * @see {@link https://remixicon.com/icon/camera-fill Remix Icon Docs}
 */
export { CameraFill }
