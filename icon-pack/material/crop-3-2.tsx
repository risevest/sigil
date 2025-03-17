import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16V8C21 6.9 20.1 6 19 6ZM19 16H5V8H19V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Crop32'

/**
 * Material Icon: Crop 3 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crop_3_2 Material Icon Docs}
 */
export const Crop32 = memo(Icon)
