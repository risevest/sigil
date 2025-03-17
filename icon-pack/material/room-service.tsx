import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 17V19H22V17H2ZM21 16C20.73 11.93 17.75 8.6 13.84 7.79C13.94 7.55 14 7.28 14 7C14 5.9 13.1 5 12 5C10.9 5 10 5.9 10 7C10 7.28 10.06 7.55 10.16 7.79C6.25 8.6 3.27 11.93 3 16H21ZM12 9.58C14.95 9.58 17.47 11.41 18.5 13.99H5.5C6.53 11.41 9.05 9.58 12 9.58Z" />
    </Svg>
  )
}

Icon.displayName = 'RoomService'

/**
 * Material Icon: Room Service
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:room_service Material Icon Docs}
 */
export const RoomService = memo(Icon)
