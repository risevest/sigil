import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 11.5V5.5L12 2.5L9 5.5V7.5H3V21.5H21V11.5H15ZM7 19.5H5V17.5H7V19.5ZM7 15.5H5V13.5H7V15.5ZM7 11.5H5V9.5H7V11.5ZM13 19.5H11V17.5H13V19.5ZM13 15.5H11V13.5H13V15.5ZM13 11.5H11V9.5H13V11.5ZM13 7.5H11V5.5H13V7.5ZM19 19.5H17V17.5H19V19.5ZM19 15.5H17V13.5H19V15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LocationCity'

/**
 * Material Icon: Location City
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:location_city Material Icon Docs}
 */
export const LocationCity = memo(Icon)
