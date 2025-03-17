import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 1V4H21.5V6H18.5V9H16.5V6H13.5V4H16.5V1H18.5ZM10.5 13C9.4 13 8.5 12.1 8.5 11C8.5 9.9 9.4 9 10.5 9C11.6 9 12.5 9.9 12.5 11C12.5 12.1 11.6 13 10.5 13ZM11.5 3.06V5.08C11.1692 5.02773 10.8349 5.00098 10.5 5C7.15 5 4.5 7.57 4.5 11.2C4.5 13.54 6.45 16.64 10.5 20.34C14.55 16.64 16.5 13.55 16.5 11.2V11H18.5V11.2C18.5 14.52 15.83 18.45 10.5 23C5.17 18.45 2.5 14.52 2.5 11.2C2.5 6.22 6.3 3 10.5 3C10.84 3 11.17 3.02 11.5 3.06Z" />
    </Svg>
  )
}

Icon.displayName = 'AddLocationAlt'

/**
 * Material Icon: Add Location Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_location_alt Material Icon Docs}
 */
export const AddLocationAlt = memo(Icon)
