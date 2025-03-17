import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 5V8H12.21L8.79 16H6V19H14V16H11.79L15.21 8H18V5H10Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatItalic'

/**
 * Material Icon: Format Italic
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_italic Material Icon Docs}
 */
export const FormatItalic = memo(Icon)
