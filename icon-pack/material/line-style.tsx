import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 16H8V14H3V16ZM9.5 16H14.5V14H9.5V16ZM16 16H21V14H16V16ZM3 20H5V18H3V20ZM7 20H9V18H7V20ZM11 20H13V18H11V20ZM15 20H17V18H15V20ZM19 20H21V18H19V20ZM3 12H11V10H3V12ZM13 12H21V10H13V12ZM3 4V8H21V4H3Z" />
    </Svg>
  )
}

Icon.displayName = 'LineStyle'

/**
 * Material Icon: Line Style
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:line_style Material Icon Docs}
 */
export const LineStyle = memo(Icon)
