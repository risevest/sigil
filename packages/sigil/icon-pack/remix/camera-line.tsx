import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CameraLine = /* @__PURE__ */ memo(function CameraLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9.828 5-2 2H4v12h16V7h-3.828l-2-2zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
    </Svg>
  )
})
/**
 * Remix Icon: Camera Line
 * @see {@link https://remixicon.com/icon/camera-line Remix Icon Docs}
 */
export { CameraLine }
