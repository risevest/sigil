import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'ChatBubble'

/**
 * Material Icon: Chat Bubble
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:chat_bubble Material Icon Docs}
 */
export const ChatBubble = memo(Icon)
