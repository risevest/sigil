import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 7H5C3.9 7 3 7.9 3 9V15C3 16.1 3.9 17 5 17H19C20.1 17 21 16.1 21 15V9C21 7.9 20.1 7 19 7ZM19 15H5V9H19V15Z" />
    </Svg>
  )
}

Icon.displayName = 'Crop169'

/**
 * Material Icon: Crop 16 9
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crop_16_9 Material Icon Docs}
 */
export const Crop169 = memo(Icon)
