import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Robot3Fill = /* @__PURE__ */ memo(function Robot3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 2h-4V1h-2v1H7a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a3 3 0 0 0-3-3m-6 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 22a8 8 0 1 1 16 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Robot 3 Fill
 * @see {@link https://remixicon.com/icon/robot-3-fill Remix Icon Docs}
 */
export { Robot3Fill }
