import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShapesFill = /* @__PURE__ */ memo(function ShapesFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 6 10H6zm1 12.5h8v8h-8zM6.75 22a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5" />
    </Svg>
  )
})
/**
 * Remix Icon: Shapes Fill
 * @see {@link https://remixicon.com/icon/shapes-fill Remix Icon Docs}
 */
export { ShapesFill }
