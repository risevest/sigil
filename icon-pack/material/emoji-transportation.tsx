import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.57 10.66C20.43 10.26 20.05 10 19.6 10H12.41C11.95 10 11.58 10.26 11.43 10.66L10 14.77L10.01 20.28C10.01 20.66 10.32 21 10.7 21H11.32C11.7 21 12 20.62 12 20.24V19H20V20.24C20 20.62 20.31 21 20.69 21H21.3C21.68 21 21.99 20.66 21.99 20.28L22 18.91V14.77L20.57 10.66ZM12.41 11H19.6L20.63 14H11.38L12.41 11ZM12 17C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16C13 16.55 12.55 17 12 17ZM20 17C19.45 17 19 16.55 19 16C19 15.45 19.45 15 20 15C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17Z" />
      <Path d="M14 9H15V3H7V8H2V21H3V9H8V4H14V9Z" />
      <Path d="M7 11H5V13H7V11Z" />
      <Path d="M12 5H10V7H12V5Z" />
      <Path d="M7 15H5V17H7V15Z" />
      <Path d="M7 19H5V21H7V19Z" />
    </Svg>
  )
}

Icon.displayName = 'EmojiTransportation'

/**
 * Material Icon: Emoji Transportation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:emoji_transportation Material Icon Docs}
 */
export const EmojiTransportation = memo(Icon)
