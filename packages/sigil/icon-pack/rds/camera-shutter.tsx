import { memo } from 'react'
import Svg, { Rect, Circle } from 'react-native-svg'
import type { IconProps } from '../../types'
const CameraShutter = /* @__PURE__ */ memo(function CameraShutter(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 65 64" width={size} height={size} {...props}>
      <Rect width={64} height={64} x={0.5} fill={color} rx={32} />
      <Circle cx={32.5} cy={32} r={26} fill={color} stroke="#222" strokeWidth={2} />
    </Svg>
  )
})
export { CameraShutter }
