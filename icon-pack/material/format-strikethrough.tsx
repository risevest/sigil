import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 19.5H14V16.5H10V19.5ZM5 4.5V7.5H10V10.5H14V7.5H19V4.5H5ZM3 14.5H21V12.5H3V14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatStrikethrough'

/**
 * Material Icon: Format Strikethrough
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_strikethrough Material Icon Docs}
 */
export const FormatStrikethrough = memo(Icon)
