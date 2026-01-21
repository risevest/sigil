import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatPrivateFill = /* @__PURE__ */ memo(function ChatPrivateFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 5c-1.598 0-3 1.34-3 3v1H8v5h8v-5h-1v-1a3 3 0 0 0-3-3m2 6v1h-4v-1zm-2-4c.476 0 1 .49 1 1v1h-2v-1c0-.51.487-1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Private Fill
 * @see {@link https://remixicon.com/icon/chat-private-fill Remix Icon Docs}
 */
export { ChatPrivateFill }
