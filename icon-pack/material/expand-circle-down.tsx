import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.08 9.59L12 12.67L8.92 9.59L7.5 11L12 15.5L16.5 11L15.08 9.59ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandCircleDown'

/**
 * Material Icon: Expand Circle Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:expand_circle_down Material Icon Docs}
 */
export const ExpandCircleDown = memo(Icon)
