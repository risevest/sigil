import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Building3Line = /* @__PURE__ */ memo(function Building3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 10.111V1l11 6v14H3V7zm2-5.742v8.82l-7-3.111V19h14V8.187z" />
    </Svg>
  )
})
/**
 * Remix Icon: Building 3 Line
 * @see {@link https://remixicon.com/icon/building-3-line Remix Icon Docs}
 */
export { Building3Line }
