import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.88 7.88L4.42 9.42C4.15 10.23 4 11.1 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C11.1 4 10.23 4.15 9.42 4.42L7.89 2.89C9.15 2.32 10.54 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.53 2.32 9.14 2.88 7.88ZM7 5.5C7 6.33 6.33 7 5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'MotionPhotosOn'

/**
 * Material Icon: Motion Photos On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:motion_photos_on Material Icon Docs}
 */
export const MotionPhotosOn = memo(Icon)
