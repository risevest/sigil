import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 15V17H17V15H7ZM3 21H21V19H3V21ZM3 13H21V11H3V13ZM7 7V9H17V7H7ZM3 3V5H21V3H3Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatAlignCenter'

/**
 * Material Icon: Format Align Center
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_align_center Material Icon Docs}
 */
export const FormatAlignCenter = memo(Icon)
