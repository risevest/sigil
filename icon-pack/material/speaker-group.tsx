import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8V17.2C8 18.19 8.81 18.99 9.8 18.99L18.2 19C19.19 19 20 18.19 20 17.2V2.8C20 1.81 19.19 1 18.2 1ZM18 17L10 16.99V3H18V17ZM14 8C15.1 8 16 7.11 16 6C16 4.89 15.1 4 14 4C12.9 4 12 4.89 12 6C12 7.11 12.9 8 14 8ZM14 16C15.93 16 17.5 14.43 17.5 12.5C17.5 10.57 15.93 9 14 9C12.07 9 10.5 10.57 10.5 12.5C10.5 14.43 12.07 16 14 16ZM14 11C14.83 11 15.5 11.67 15.5 12.5C15.5 13.33 14.83 14 14 14C13.17 14 12.5 13.33 12.5 12.5C12.5 11.67 13.17 11 14 11ZM6 5H4V21C4 22.1 4.89 23 6 23H16V21H6V5Z" />
    </Svg>
  )
}

Icon.displayName = 'SpeakerGroup'

/**
 * Material Icon: Speaker Group
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:speaker_group Material Icon Docs}
 */
export const SpeakerGroup = memo(Icon)
