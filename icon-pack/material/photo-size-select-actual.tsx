import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C2 3 1 4 1 5V19C1 20.1 1.9 21 3 21H21C22 21 23 20 23 19V5C23 4 22 3 21 3ZM21 18.92C20.98 18.95 20.94 18.98 20.92 19H3V5.08L3.08 5H20.91C20.94 5.02 20.97 5.06 20.99 5.08V18.92H21ZM11 15.51L8.5 12.5L5 17H19L14.5 11L11 15.51Z" />
    </Svg>
  )
}

Icon.displayName = 'PhotoSizeSelectActual'

/**
 * Material Icon: Photo Size Select Actual
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:photo_size_select_actual Material Icon Docs}
 */
export const PhotoSizeSelectActual = memo(Icon)
