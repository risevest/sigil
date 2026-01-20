import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignVertically = /* @__PURE__ */ memo(function AlignVertically(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 11h18v2H3zm15 7v3h-2v-3h-3l4-4 4 4zM8 18v3H6v-3H3l4-4 4 4zM18 6h3l-4 4-4-4h3V3h2zM8 6h3l-4 4-4-4h3V3h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Align Vertically
 * @see {@link https://remixicon.com/icon/align-vertically Remix Icon Docs}
 */
export { AlignVertically }
