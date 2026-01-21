import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ReplyFill = /* @__PURE__ */ memo(function ReplyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81A9 9 0 0 0 13 15h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Reply Fill
 * @see {@link https://remixicon.com/icon/reply-fill Remix Icon Docs}
 */
export { ReplyFill }
