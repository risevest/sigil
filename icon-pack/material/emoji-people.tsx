import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.8199 6C12.9245 6 13.8199 5.10457 13.8199 4C13.8199 2.89543 12.9245 2 11.8199 2C10.7154 2 9.81995 2.89543 9.81995 4C9.81995 5.10457 10.7154 6 11.8199 6Z" />
      <Path d="M15.7099 8.11C15.3199 7.72 14.6499 7 13.3499 7C13.1399 7 11.9299 7 10.8099 7C8.05995 6.99 5.81995 4.75 5.81995 2H3.81995C3.81995 5.16 5.92995 7.84 8.81995 8.71V22H10.8199V16H12.8199V22H14.8199V10.05L18.7699 14L20.1799 12.59L15.7099 8.11Z" />
    </Svg>
  )
}

Icon.displayName = 'EmojiPeople'

/**
 * Material Icon: Emoji People
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:emoji_people Material Icon Docs}
 */
export const EmojiPeople = memo(Icon)
