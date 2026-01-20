import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DriveFill = /* @__PURE__ */ memo(function DriveFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m7.94 4.146 3.482 6.03-5.94 10.293L2 14.44zm2.176 10.294H22l-3.482 6.029H6.635zm4.343-1L8.518 3.145h6.964l5.94 10.295z" />
    </Svg>
  )
})
/**
 * Remix Icon: Drive Fill
 * @see {@link https://remixicon.com/icon/drive-fill Remix Icon Docs}
 */
export { DriveFill }
