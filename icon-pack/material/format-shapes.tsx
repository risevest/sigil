import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 7V1H17V3H7V1H1V7H3V17H1V23H7V21H17V23H23V17H21V7H23ZM3 3H5V5H3V3ZM5 21H3V19H5V21ZM17 19H7V17H5V7H7V5H17V7H19V17H17V19ZM21 21H19V19H21V21ZM19 5V3H21V5H19ZM13.73 14H10.24L9.51 16H7.89L11.29 7H12.69L16.1 16H14.47L13.73 14ZM10.69 12.74H13.3L12 8.91L10.69 12.74Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatShapes'

/**
 * Material Icon: Format Shapes
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_shapes Material Icon Docs}
 */
export const FormatShapes = memo(Icon)
