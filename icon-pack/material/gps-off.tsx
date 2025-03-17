import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C10.02 3.17 9.09 3.44 8.23 3.84L9.76 5.37C10.46 5.13 11.22 5 12 5C15.87 5 19 8.13 19 12C19 12.79 18.87 13.54 18.63 14.24L20.16 15.77C20.56 14.91 20.83 13.98 20.94 13H23V11H20.94ZM3 4.27L5.04 6.31C3.97 7.62 3.26 9.23 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C14.77 20.74 16.38 20.03 17.69 18.96L19.73 21L21.14 19.59L4.41 2.86L3 4.27ZM16.27 17.54C15.09 18.45 13.61 19 12 19C8.13 19 5 15.87 5 12C5 10.39 5.55 8.91 6.46 7.73L16.27 17.54Z" />
    </Svg>
  )
}

Icon.displayName = 'GpsOff'

/**
 * Material Icon: Gps Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gps_off Material Icon Docs}
 */
export const GpsOff = memo(Icon)
