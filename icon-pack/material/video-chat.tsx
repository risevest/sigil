import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" />
      <Path d="M8 14H14C14.55 14 15 13.55 15 13V11.01L17 13V7L15 8.99V7C15 6.45 14.55 6 14 6H8C7.45 6 7 6.45 7 7V13C7 13.55 7.45 14 8 14Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoChat'

/**
 * Material Icon: Video Chat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:video_chat Material Icon Docs}
 */
export const VideoChat = memo(Icon)
