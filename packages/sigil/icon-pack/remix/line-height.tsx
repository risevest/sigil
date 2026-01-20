import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LineHeight = /* @__PURE__ */ memo(function LineHeight(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 4h10v2H11zM6 7v4H4V7H1l4-4 4 4zm0 10h3l-4 4-4-4h3v-4h2zm5 1h10v2H11zm-2-7h12v2H9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Line Height
 * @see {@link https://remixicon.com/icon/line-height Remix Icon Docs}
 */
export { LineHeight }
