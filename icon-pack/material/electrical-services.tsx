import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 14C21 13.45 20.55 13 20 13H18V15H20C20.55 15 21 14.55 21 14Z" />
      <Path d="M20 17H18V19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17Z" />
      <Path d="M12 14H10V18H12C12 19.1 12.9 20 14 20H17V12H14C12.9 12 12 12.9 12 14Z" />
      <Path d="M5 13C5 11.9 5.9 11 7 11H8.5C10.43 11 12 9.43 12 7.5C12 5.57 10.43 4 8.5 4H5C4.45 4 4 4.45 4 5C4 5.55 4.45 6 5 6H8.5C9.33 6 10 6.67 10 7.5C10 8.33 9.33 9 8.5 9H7C4.79 9 3 10.79 3 13C3 15.21 4.79 17 7 17H9V15H7C5.9 15 5 14.1 5 13Z" />
    </Svg>
  )
}

Icon.displayName = 'ElectricalServices'

/**
 * Material Icon: Electrical Services
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:electrical_services Material Icon Docs}
 */
export const ElectricalServices = memo(Icon)
