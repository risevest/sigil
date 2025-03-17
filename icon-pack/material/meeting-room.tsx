import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 19V4H15V3H5V19H3V21H15V6H17V21H21V19H19ZM13 19H7V5H13V19ZM10 11H12V13H10V11Z" />
    </Svg>
  )
}

Icon.displayName = 'MeetingRoom'

/**
 * Material Icon: Meeting Room
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:meeting_room Material Icon Docs}
 */
export const MeetingRoom = memo(Icon)
