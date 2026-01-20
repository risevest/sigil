import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Chat2Fill = /* @__PURE__ */ memo(function Chat2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.45 19 12 22.5 9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat 2 Fill
 * @see {@link https://remixicon.com/icon/chat-2-fill Remix Icon Docs}
 */
export { Chat2Fill }
