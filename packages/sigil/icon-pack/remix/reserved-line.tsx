import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ReservedLine = /* @__PURE__ */ memo(function ReservedLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-8-2h14V5H5zm3-5h8v2H8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Reserved Line
 * @see {@link https://remixicon.com/icon/reserved-line Remix Icon Docs}
 */
export { ReservedLine }
