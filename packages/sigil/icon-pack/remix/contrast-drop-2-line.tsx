import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContrastDrop2Line = /* @__PURE__ */ memo(function ContrastDrop2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 3.097-4.95 4.95a7 7 0 1 0 9.9 0zM12 .27l6.364 6.364a9 9 0 1 1-12.728 0zM7 12.997h10a5 5 0 1 1-10 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Contrast Drop 2 Line
 * @see {@link https://remixicon.com/icon/contrast-drop-2-line Remix Icon Docs}
 */
export { ContrastDrop2Line }
