import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 17H21V15H11V17ZM3 12L7 16V8L3 12ZM3 21H21V19H3V21ZM3 3V5H21V3H3ZM11 9H21V7H11V9ZM11 13H21V11H11V13Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatIndentDecrease'

/**
 * Material Icon: Format Indent Decrease
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_indent_decrease Material Icon Docs}
 */
export const FormatIndentDecrease = memo(Icon)
