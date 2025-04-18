import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 14H10.74L8.82 5.56C8.61 4.65 7.8 4 6.87 4H3V6H6.87L8.29 12.25H8.28C6.12 12.9 4.47 14.73 4.09 17H0V19H6V18C6 15.79 7.79 14 10 14Z" />
      <Path d="M19 8H18.18L16.83 4.31C16.55 3.52 15.8 3 14.96 3H11V5H14.96L16.06 8H10.4L10.86 10H15C14.57 10.58 14.25 11.25 14.1 12H11.31L11.77 14H14.1C14.54 16.23 16.41 17.88 18.75 17.99C21.55 18.12 24 15.8 24 12.99C24 10.2 21.8 8 19 8ZM19 16C17.32 16 16 14.68 16 13C16 12.07 16.41 11.27 17.05 10.72L18.01 13.36L19.89 12.68L18.92 10.01C18.95 10.01 18.98 10 19.01 10C20.69 10 22.01 11.32 22.01 13C22.01 14.68 20.68 16 19 16Z" />
      <Path d="M10 15C8.34 15 7 16.34 7 18C7 19.66 8.34 21 10 21C11.66 21 13 19.66 13 18C13 16.34 11.66 15 10 15ZM10 19C9.45 19 9 18.55 9 18C9 17.45 9.45 17 10 17C10.55 17 11 17.45 11 18C11 18.55 10.55 19 10 19Z" />
    </Svg>
  )
}

Icon.displayName = 'BikeScooter'

/**
 * Material Icon: Bike Scooter
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bike_scooter Material Icon Docs}
 */
export const BikeScooter = memo(Icon)
