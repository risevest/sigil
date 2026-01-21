import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ReplyAllFill = /* @__PURE__ */ memo(function ReplyAllFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5 0 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Reply All Fill
 * @see {@link https://remixicon.com/icon/reply-all-fill Remix Icon Docs}
 */
export { ReplyAllFill }
