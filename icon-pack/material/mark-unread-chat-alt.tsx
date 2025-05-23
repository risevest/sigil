import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M20 17H4V5H14.1C14.02 4.61 13.92 3.89 14.1 3H4C2.9 3 2 3.9 2 5V23L6 19H20C21.1 19 22 18.1 22 17V7.98C21.42 8.42 20.74 8.75 20 8.9V17Z"
        fill={color}
      />
      <Path
        d="M19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.3431 1 16 2.34315 16 4C16 5.65685 17.3431 7 19 7Z"
        fill={color}
      />
      <Path d="M14 13H6V15H14V13Z" fill={color} />
      <Path d="M18 10H6V12H18V10Z" fill={color} />
      <Path d="M6 9H18V8.9C16.79 8.65 15.75 7.95 15.03 7H6V9Z" fill={color} />
    </Svg>
  )
}

Icon.displayName = 'MarkUnreadChatAlt'

/**
 * Material Icon: Mark Unread Chat Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mark_unread_chat_alt Material Icon Docs}
 */
export const MarkUnreadChatAlt = memo(Icon)
