import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M22 7.98V17C22 18.1 21.1 19 20 19H6L2 23V5C2 3.9 2.9 3 4 3H14.1C14.04 3.32 14 3.66 14 4C14 4.34 14.04 4.68 14.1 5H4V17H20V8.9C20.74 8.75 21.42 8.42 22 7.98ZM16 4C16 5.66 17.34 7 19 7C20.66 7 22 5.66 22 4C22 2.34 20.66 1 19 1C17.34 1 16 2.34 16 4Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'MarkChatUnread'

/**
 * Material Icon: Mark Chat Unread
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mark_chat_unread Material Icon Docs}
 */
export const MarkChatUnread = memo(Icon)
