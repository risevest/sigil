import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Camera2Fill = /* @__PURE__ */ memo(function Camera2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10m6-12v2h2V5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Camera 2 Fill
 * @see {@link https://remixicon.com/icon/camera-2-fill Remix Icon Docs}
 */
export { Camera2Fill }
