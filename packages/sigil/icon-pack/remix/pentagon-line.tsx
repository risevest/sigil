import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PentagonLine = /* @__PURE__ */ memo(function PentagonLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 3.03 8.53 6.198-3.258 10.028H6.729L3.47 9.228zm10.747 5.478L12 .7 1.253 8.508l4.105 12.634h13.284z" />
    </Svg>
  )
})
/**
 * Remix Icon: Pentagon Line
 * @see {@link https://remixicon.com/icon/pentagon-line Remix Icon Docs}
 */
export { PentagonLine }
