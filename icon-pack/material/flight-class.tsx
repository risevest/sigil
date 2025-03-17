import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 3.5H14.5C13.4 3.5 12.5 4.4 12.5 5.5V10.5C12.5 11.6 13.4 12.5 14.5 12.5H16.5C17.6 12.5 18.5 11.6 18.5 10.5V5.5C18.5 4.4 17.6 3.5 16.5 3.5ZM16.5 10.5H14.5V5.5H16.5V10.5ZM10 15.5H18.5V17.5H9.99C9.11 17.5 8.33 16.92 8.07 16.07L5.5 7.5V3.5H7.5V7.5L10 15.5ZM8.5 18.5H18.5V20.5H8.5V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FlightClass'

/**
 * Material Icon: Flight Class
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flight_class Material Icon Docs}
 */
export const FlightClass = memo(Icon)
