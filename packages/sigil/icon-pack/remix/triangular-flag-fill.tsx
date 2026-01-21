import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TriangularFlagFill = /* @__PURE__ */ memo(function TriangularFlagFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.66 2.181C5.016 1.613 4 2.071 4 2.932V22h2v-4h14.99c.922 0 1.352-1.142.66-1.75z" />
    </Svg>
  )
})
/**
 * Remix Icon: Triangular Flag Fill
 * @see {@link https://remixicon.com/icon/triangular-flag-fill Remix Icon Docs}
 */
export { TriangularFlagFill }
