import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 7.93L20.59 6.52L16.56 11.05L9.5 4.5L2 12.01L3.5 13.51L9.64 7.36L15.23 12.54L13.5 14.49L9.5 10.49L2 18L3.5 19.5L9.5 13.49L13.5 17.49L16.69 13.9L20.59 17.51L22 16.1L18.02 12.4L22 7.93Z" />
    </Svg>
  )
}

Icon.displayName = 'LineAxis'

/**
 * Material Icon: Line Axis
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:line_axis Material Icon Docs}
 */
export const LineAxis = memo(Icon)
