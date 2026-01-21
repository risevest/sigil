import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Css3Line = /* @__PURE__ */ memo(function Css3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.8 14h2.04l-.545 2.724 5.744 2.155 7.228-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15-9 3-8-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Css3 Line
 * @see {@link https://remixicon.com/icon/css3-line Remix Icon Docs}
 */
export { Css3Line }
