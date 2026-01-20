import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TreasureMapFill = /* @__PURE__ */ memo(function TreasureMapFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46zm4 6v2h2v-2zm4 0v2h2v-2zm6-.06-1.237-1.238-1.061 1.06L14.939 12l-1.237 1.237 1.06 1.061L16 13.061l1.237 1.237 1.061-1.06L17.061 12l1.237-1.237-1.06-1.061z" />
    </Svg>
  )
})
/**
 * Remix Icon: Treasure Map Fill
 * @see {@link https://remixicon.com/icon/treasure-map-fill Remix Icon Docs}
 */
export { TreasureMapFill }
