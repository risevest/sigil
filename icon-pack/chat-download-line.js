import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM4 18.3851L5.76282 17H20V5H4V18.3851ZM13 11H16L12 15L8 11H11V7H13V11Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatDownloadLine'

/**
 * Remix Icon: Chat Download Line
 * @see {@link https://remixicon.com/icon/chat-download-line Remix Icon Docs}
 */
export const ChatDownloadLine = memo(Icon)
