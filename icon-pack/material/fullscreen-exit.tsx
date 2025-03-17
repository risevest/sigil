import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z" />
    </Svg>
  )
}

Icon.displayName = 'FullscreenExit'

/**
 * Material Icon: Fullscreen Exit
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fullscreen_exit Material Icon Docs}
 */
export const FullscreenExit = memo(Icon)
