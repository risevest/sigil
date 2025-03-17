import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM19 17H5V7H19V17Z" />
    </Svg>
  )
}

Icon.displayName = 'CropLandscape'

/**
 * Material Icon: Crop Landscape
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crop_landscape Material Icon Docs}
 */
export const CropLandscape = memo(Icon)
