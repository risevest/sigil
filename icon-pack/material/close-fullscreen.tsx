import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 3.41L16.71 8.7L20 12H12V4L15.29 7.29L20.59 2L22 3.41ZM3.41 22L8.7 16.71L12 20V12H4L7.29 15.29L2 20.59L3.41 22Z" />
    </Svg>
  )
}

Icon.displayName = 'CloseFullscreen'

/**
 * Material Icon: Close Fullscreen
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:close_fullscreen Material Icon Docs}
 */
export const CloseFullscreen = memo(Icon)
