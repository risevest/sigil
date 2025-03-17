import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM5 8V6H19V8H5ZM10.56 18.46L16.49 12.53L15.43 11.47L10.56 16.34L8.45 14.23L7.39 15.29L10.56 18.46Z" />
    </Svg>
  )
}

Icon.displayName = 'EventAvailable'

/**
 * Material Icon: Event Available
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:event_available Material Icon Docs}
 */
export const EventAvailable = memo(Icon)
