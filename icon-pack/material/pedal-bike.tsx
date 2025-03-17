import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.18 10L16.48 5.32C16.19 4.53 15.44 4 14.6 4H12V6H14.6L16.06 10H11.25L10.89 9H12V7H7V9H8.75L10.57 14H9.9C9.46 11.77 7.59 10.12 5.25 10.01C2.45 9.87 0 12.2 0 15C0 17.8 2.2 20 5 20C7.46 20 9.45 18.31 9.9 16H14.1C14.54 18.23 16.41 19.88 18.75 19.99C21.55 20.12 24 17.8 24 14.99C24 12.19 21.8 9.99 19 9.99H18.18V10ZM7.82 16C7.42 17.17 6.33 18 5 18C3.32 18 2 16.68 2 15C2 13.32 3.32 12 5 12C6.33 12 7.42 12.83 7.82 14H5V16H7.82ZM14.1 14H12.7L11.97 12H15C14.56 12.58 14.24 13.25 14.1 14ZM19 18C17.32 18 16 16.68 16 15C16 14.07 16.41 13.27 17.05 12.72L18.01 15.36L19.89 14.68L18.92 12.01C18.95 12.01 18.98 12 19.01 12C20.69 12 22.01 13.32 22.01 15C22.01 16.68 20.68 18 19 18Z" />
    </Svg>
  )
}

Icon.displayName = 'PedalBike'

/**
 * Material Icon: Pedal Bike
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pedal_bike Material Icon Docs}
 */
export const PedalBike = memo(Icon)
