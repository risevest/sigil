import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatSettingsFill = /* @__PURE__ */ memo(function ChatSettingsFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm1.69-6.929-.975.563 1 1.732.976-.563c.501.51 1.14.887 1.854 1.071V16h2v-1.126a4 4 0 0 0 1.854-1.072l.976.564 1-1.732-.975-.563a4 4 0 0 0 0-2.142l.975-.563-1-1.732-.976.563A4 4 0 0 0 13 7.126V6h-2v1.126a4 4 0 0 0-1.854 1.071l-.976-.563-1 1.732.975.563a4 4 0 0 0 0 2.142M12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Settings Fill
 * @see {@link https://remixicon.com/icon/chat-settings-fill Remix Icon Docs}
 */
export { ChatSettingsFill }
