import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM14 10.6L17 13V7L14 9.4V7H7V13H14V10.6Z" />
    </Svg>
  )
}

Icon.displayName = 'VoiceChat'

/**
 * Material Icon: Voice Chat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:voice_chat Material Icon Docs}
 */
export const VoiceChat = memo(Icon)
