import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ListCheck2 = /* @__PURE__ */ memo(function ListCheck2(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 4h10v2H11zm0 4h6v2h-6zm0 6h10v2H11zm0 4h6v2h-6zM3 4h6v6H3zm2 2v2h2V6zm-2 8h6v6H3zm2 2v2h2v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: List Check 2
 * @see {@link https://remixicon.com/icon/list-check-2 Remix Icon Docs}
 */
export { ListCheck2 }
