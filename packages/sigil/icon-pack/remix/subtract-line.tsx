import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SubtractLine = /* @__PURE__ */ memo(function SubtractLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 11v2h14v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Subtract Line
 * @see {@link https://remixicon.com/icon/subtract-line Remix Icon Docs}
 */
export { SubtractLine }
