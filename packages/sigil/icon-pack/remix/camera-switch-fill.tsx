import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CameraSwitchFill = /* @__PURE__ */ memo(function CameraSwitchFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm5.684 15.368-.895-1.79A4 4 0 0 1 8 13h2.001L7.839 8.677a6 6 0 0 0 6.845 9.69M9.316 7.632l.895 1.79A4 4 0 0 1 16 13h-2.001l2.161 4.323a6 6 0 0 0-6.845-9.69" />
    </Svg>
  )
})
/**
 * Remix Icon: Camera Switch Fill
 * @see {@link https://remixicon.com/icon/camera-switch-fill Remix Icon Docs}
 */
export { CameraSwitchFill }
