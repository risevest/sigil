import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 10V19H4.98V5H13.98V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H19ZM16.06 7.94L17 10L17.94 7.94L20 7L17.94 6.06L17 4L16.06 6.06L14 7L16.06 7.94ZM12 8L10.75 10.75L8 12L10.75 13.25L12 16L13.25 13.25L16 12L13.25 10.75L12 8Z" />
    </Svg>
  )
}

Icon.displayName = 'PhotoFilter'

/**
 * Material Icon: Photo Filter
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:photo_filter Material Icon Docs}
 */
export const PhotoFilter = memo(Icon)
