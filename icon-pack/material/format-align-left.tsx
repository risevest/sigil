import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 15H3V17H15V15ZM15 7H3V9H15V7ZM3 13H21V11H3V13ZM3 21H21V19H3V21ZM3 3V5H21V3H3Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatAlignLeft'

/**
 * Material Icon: Format Align Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_align_left Material Icon Docs}
 */
export const FormatAlignLeft = memo(Icon)
