import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.52 7.23L19.53 7.22L15.81 3.5L14.75 4.56L16.86 6.67C15.92 7.03 15.25 7.93 15.25 9C15.25 10.38 16.37 11.5 17.75 11.5C18.11 11.5 18.44 11.42 18.75 11.29V18.5C18.75 19.05 18.3 19.5 17.75 19.5C17.2 19.5 16.75 19.05 16.75 18.5V14C16.75 12.9 15.85 12 14.75 12H13.75V5C13.75 3.9 12.85 3 11.75 3H5.75C4.65 3 3.75 3.9 3.75 5V21H13.75V13.5H15.25V18.5C15.25 19.88 16.37 21 17.75 21C19.13 21 20.25 19.88 20.25 18.5V9C20.25 8.31 19.97 7.68 19.52 7.23ZM11.75 19H5.75V12H11.75V19ZM11.75 10H5.75V5H11.75V10ZM17.75 10C17.2 10 16.75 9.55 16.75 9C16.75 8.45 17.2 8 17.75 8C18.3 8 18.75 8.45 18.75 9C18.75 9.55 18.3 10 17.75 10Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalGasStation'

/**
 * Material Icon: Local Gas Station
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_gas_station Material Icon Docs}
 */
export const LocalGasStation = memo(Icon)
