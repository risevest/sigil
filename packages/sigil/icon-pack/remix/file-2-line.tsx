import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const File2Line = /* @__PURE__ */ memo(function File2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m3 8 6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993zm7-4v5H5v11h14V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: File 2 Line
 * @see {@link https://remixicon.com/icon/file-2-line Remix Icon Docs}
 */
export { File2Line }
