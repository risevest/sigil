import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 17.5H19.5V20.5H18V17.5ZM2 17.5H17V20.5H2V17.5ZM16.03 11.7H14.5C13.48 11.7 12.65 10.72 12.65 9.7C12.65 8.68 13.48 7.95 14.5 7.95V6.45C12.65 6.45 11.15 7.95 11.15 9.8C11.15 11.65 12.65 13.15 14.5 13.15H16.03C17.08 13.15 18 13.89 18 15.2V16.5H19.5V14.86C19.5 13.05 17.9 11.7 16.03 11.7ZM20.5 17.5H22V20.5H20.5V17.5ZM18.85 9.23C19.47 8.62 19.85 7.78 19.85 6.85C19.85 5 18.35 3.5 16.5 3.5V5C17.52 5 18.35 5.83 18.35 6.85C18.35 7.87 17.52 8.7 16.5 8.7V10.2C18.74 10.2 20.5 12.03 20.5 14.27V16.5H22V14.26C22 12.04 20.72 10.12 18.85 9.23Z" />
    </Svg>
  )
}

Icon.displayName = 'SmokingRooms'

/**
 * Material Icon: Smoking Rooms
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:smoking_rooms Material Icon Docs}
 */
export const SmokingRooms = memo(Icon)
