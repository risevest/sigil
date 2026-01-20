import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ComputerFill = /* @__PURE__ */ memo(function ComputerFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 18v2h4v2H7v-2h4v-2H2.992A1 1 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008z" />
    </Svg>
  )
})
/**
 * Remix Icon: Computer Fill
 * @see {@link https://remixicon.com/icon/computer-fill Remix Icon Docs}
 */
export { ComputerFill }
