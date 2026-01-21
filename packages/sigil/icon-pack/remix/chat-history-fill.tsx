import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatHistoryFill = /* @__PURE__ */ memo(function ChatHistoryFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m1 5h-2v7h6v-2h-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat History Fill
 * @see {@link https://remixicon.com/icon/chat-history-fill Remix Icon Docs}
 */
export { ChatHistoryFill }
