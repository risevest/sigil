import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 20L9 17H7V4H5V17H3L6 20ZM12.2 8.5V13.5L10 14.4V16.5L21 11.75V10.25L10 5.5V7.6L12.2 8.5ZM19.02 11L14 12.87V9.13L19.02 11Z" />
    </Svg>
  )
}

Icon.displayName = 'TextRotationDown'

/**
 * Material Icon: Text Rotation Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_rotation_down Material Icon Docs}
 */
export const TextRotationDown = memo(Icon)
