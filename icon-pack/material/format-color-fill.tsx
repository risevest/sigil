import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.56 8.94L7.62 0L6.21 1.41L8.59 3.79L3.44 8.94C2.85 9.53 2.85 10.48 3.44 11.06L8.94 16.56C9.23 16.85 9.62 17 10 17C10.38 17 10.77 16.85 11.06 16.56L16.56 11.06C17.15 10.48 17.15 9.53 16.56 8.94ZM5.21 10L10 5.21L14.79 10H5.21ZM19 11.5C19 11.5 17 13.67 17 15C17 16.1 17.9 17 19 17C20.1 17 21 16.1 21 15C21 13.67 19 11.5 19 11.5ZM2 20H22V24H2V20Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatColorFill'

/**
 * Material Icon: Format Color Fill
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_color_fill Material Icon Docs}
 */
export const FormatColorFill = memo(Icon)
