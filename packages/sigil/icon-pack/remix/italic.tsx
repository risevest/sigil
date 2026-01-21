import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Italic = /* @__PURE__ */ memo(function Italic(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
    </Svg>
  )
})
/**
 * Remix Icon: Italic
 * @see {@link https://remixicon.com/icon/italic Remix Icon Docs}
 */
export { Italic }
