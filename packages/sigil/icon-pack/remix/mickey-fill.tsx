import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MickeyFill = /* @__PURE__ */ memo(function MickeyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.5 2a4.5 4.5 0 0 1 .883 8.913 8 8 0 1 1-14.765-.001A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A8 8 0 0 1 12 6c.693 0 1.365.088 2.006.254A4.5 4.5 0 0 1 18.5 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Mickey Fill
 * @see {@link https://remixicon.com/icon/mickey-fill Remix Icon Docs}
 */
export { MickeyFill }
