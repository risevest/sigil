import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 5H14.5L9.75 16H11.85L12.75 13.8H17.75L18.65 16H20.75L16 5ZM13.38 12L15.25 6.98L17.12 12H13.38ZM6.25 20L9.25 17H7.25V4H5.25V17H3.25L6.25 20Z" />
    </Svg>
  )
}

Icon.displayName = 'TextRotateVertical'

/**
 * Material Icon: Text Rotate Vertical
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_rotate_vertical Material Icon Docs}
 */
export const TextRotateVertical = memo(Icon)
