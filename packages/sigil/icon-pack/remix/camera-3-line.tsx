import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Camera3Line = /* @__PURE__ */ memo(function Camera3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20zm2 1v12h16V7zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10M4 2h6v2H4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Camera 3 Line
 * @see {@link https://remixicon.com/icon/camera-3-line Remix Icon Docs}
 */
export { Camera3Line }
