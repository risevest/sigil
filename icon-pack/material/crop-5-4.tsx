import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H5C3.9 4 3 4.9 3 6V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V6H19V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Crop54'

/**
 * Material Icon: Crop 5 4
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crop_5_4 Material Icon Docs}
 */
export const Crop54 = memo(Icon)
