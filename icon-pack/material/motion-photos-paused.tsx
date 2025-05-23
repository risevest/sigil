import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.81 2.22 9.68 2.6 8.62L4.48 9.3C4.17 10.14 4 11.05 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C11.05 4 10.15 4.17 9.31 4.48L8.63 2.59C9.69 2.22 10.82 2 12 2C17.52 2 22 6.48 22 12ZM5.5 4C4.67 4 4 4.67 4 5.5C4 6.33 4.67 7 5.5 7C6.33 7 7 6.33 7 5.5C7 4.67 6.33 4 5.5 4ZM11 16V8H9V16H11ZM15 16V8H13V16H15Z" />
    </Svg>
  )
}

Icon.displayName = 'MotionPhotosPaused'

/**
 * Material Icon: Motion Photos Paused
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:motion_photos_paused Material Icon Docs}
 */
export const MotionPhotosPaused = memo(Icon)
