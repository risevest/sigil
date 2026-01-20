import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StairsFill = /* @__PURE__ */ memo(function StairsFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3h6v18H3v-6h4v-4h4V7h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Stairs Fill
 * @see {@link https://remixicon.com/icon/stairs-fill Remix Icon Docs}
 */
export { StairsFill }
