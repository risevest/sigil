import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM13 7H11V15H13V7ZM17 9H15V15H17V9ZM9 11H7V15H9V11Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatPollFill'

/**
 * Remix Icon: Chat Poll Fill
 * @see {@link https://remixicon.com/icon/chat-poll-fill Remix Icon Docs}
 */
export const ChatPollFill = memo(Icon)
