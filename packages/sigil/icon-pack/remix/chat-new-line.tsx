import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3z" />
    </Svg>
  )
})
Icon.displayName = 'ChatNewLine'
/**
 * Remix Icon: Chat New Line
 * @see {@link https://remixicon.com/icon/chat-new-line Remix Icon Docs}
 */
export const ChatNewLine = Icon
