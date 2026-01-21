import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContrastDropLine = /* @__PURE__ */ memo(function ContrastDropLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 3.097-4.95 4.95a7 7 0 1 0 9.9 0zM12 .27l6.364 6.364a9 9 0 1 1-12.728 0zm0 17.728v-10a5 5 0 1 1 0 10" />
    </Svg>
  )
})
/**
 * Remix Icon: Contrast Drop Line
 * @see {@link https://remixicon.com/icon/contrast-drop-line Remix Icon Docs}
 */
export { ContrastDropLine }
