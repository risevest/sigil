import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.291 20.824 2 22l1.176-5.291A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.709-1.176M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z" />
    </Svg>
  )
})
Icon.displayName = 'ChatSmile2Fill'
/**
 * Remix Icon: Chat Smile 2 Fill
 * @see {@link https://remixicon.com/icon/chat-smile-2-fill Remix Icon Docs}
 */
export const ChatSmile2Fill = Icon
