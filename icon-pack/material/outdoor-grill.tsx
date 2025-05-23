import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 22C18.16 22 19.5 20.66 19.5 19C19.5 17.34 18.16 16 16.5 16C15.2 16 14.1 16.84 13.68 18H8.64L10.63 14.94C10.92 14.98 11.21 15 11.5 15C11.79 15 12.08 14.98 12.37 14.94L13.39 16.51C13.81 15.98 14.35 15.56 14.99 15.3L14.39 14.37C16.81 13.27 18.5 10.84 18.5 8H4.5C4.5 10.84 6.19 13.27 8.62 14.37L4.67 20.45C4.37 20.91 4.5 21.53 4.96 21.83C5.42 22.13 6.04 22 6.34 21.54L7.34 19.99H13.68C14.1 21.16 15.2 22 16.5 22ZM16.5 18C17.05 18 17.5 18.45 17.5 19C17.5 19.55 17.05 20 16.5 20C15.95 20 15.5 19.55 15.5 19C15.5 18.45 15.95 18 16.5 18ZM6.92 10H16.08C15.31 11.76 13.54 13 11.5 13C9.46 13 7.69 11.76 6.92 10Z" />
      <Path d="M8.91 7H9.91C10.06 5.85 10.14 5.36 9.02 4.04C8.6 3.54 8.34 3.27 8.56 2H7.57C7.36 3.11 7.6 4.05 8.46 4.96C8.68 5.2 9.25 5.63 8.91 7Z" />
      <Path d="M11.39 7H12.39C12.54 5.85 12.62 5.36 11.5 4.04C11.08 3.54 10.82 3.26 11.04 2H10.05C9.84 3.11 10.08 4.05 10.94 4.96C11.17 5.2 11.74 5.63 11.39 7Z" />
      <Path d="M13.91 7H14.91C15.06 5.85 15.14 5.36 14.02 4.04C13.6 3.54 13.34 3.27 13.56 2H12.57C12.36 3.11 12.6 4.05 13.46 4.96C13.68 5.2 14.25 5.63 13.91 7Z" />
    </Svg>
  )
}

Icon.displayName = 'OutdoorGrill'

/**
 * Material Icon: Outdoor Grill
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:outdoor_grill Material Icon Docs}
 */
export const OutdoorGrill = memo(Icon)
