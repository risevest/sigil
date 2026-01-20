import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Chat2Line = /* @__PURE__ */ memo(function Chat2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.45 19 12 22.5 9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-1.041-2H20V5H4v12h6.591L12 19.012z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat 2 Line
 * @see {@link https://remixicon.com/icon/chat-2-line Remix Icon Docs}
 */
export { Chat2Line }
