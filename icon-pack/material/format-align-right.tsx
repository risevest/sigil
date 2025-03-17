import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 21H21V19H3V21ZM9 17H21V15H9V17ZM3 13H21V11H3V13ZM9 9H21V7H9V9ZM3 3V5H21V3H3Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatAlignRight'

/**
 * Material Icon: Format Align Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_align_right Material Icon Docs}
 */
export const FormatAlignRight = memo(Icon)
