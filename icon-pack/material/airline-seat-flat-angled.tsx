import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.00073 6.75C6.31073 6.75 6.70073 6.9 6.90073 7.31C7.14073 7.81 6.92073 8.41 6.43073 8.65C6.29073 8.71 6.15073 8.75 6.00073 8.75C5.70073 8.75 5.30073 8.6 5.11073 8.19C4.94073 7.85 5.01073 7.56 5.06073 7.41C5.11073 7.27 5.24073 7.01 5.57073 6.85C5.71073 6.79 5.85073 6.75 6.00073 6.75ZM12.4707 8.86L19.1607 11.27C19.6807 11.46 20.0907 11.83 20.3107 12.32C20.5307 12.8 20.5607 13.35 20.3707 13.85L20.3607 13.87L11.7707 10.76L12.4707 8.86ZM10.0007 15.44L14.0007 16.88V17.25H10.0007V15.44ZM6.00073 4.75C5.56073 4.75 5.12073 4.85 4.70073 5.05C3.21073 5.76 2.58073 7.55 3.30073 9.05C3.81073 10.12 4.88073 10.75 6.00073 10.75C6.44073 10.75 6.88073 10.65 7.30073 10.45C8.79073 9.73 9.42073 7.94 8.71073 6.45C8.19073 5.38 7.12073 4.75 6.00073 4.75ZM11.2807 6.3L9.20073 11.96L21.5607 16.43L22.2507 14.54C23.0207 12.45 21.9407 10.15 19.8407 9.39L11.2807 6.3ZM2.19073 10.5L1.50073 12.39L8.00073 14.73V19.25H16.0007V17.62L20.5207 19.25L21.2107 17.36L2.19073 10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineSeatFlatAngled'

/**
 * Material Icon: Airline Seat Flat Angled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_seat_flat_angled Material Icon Docs}
 */
export const AirlineSeatFlatAngled = memo(Icon)
