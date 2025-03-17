import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.25 7H8.75L5.25 3.5L1.75 7H4.25V17H1.75L5.25 20.5L8.75 17H6.25V7ZM10.25 5V7H22.25V5H10.25ZM10.25 19H22.25V17H10.25V19ZM10.25 13H22.25V11H10.25V13Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatLineSpacing'

/**
 * Material Icon: Format Line Spacing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_line_spacing Material Icon Docs}
 */
export const FormatLineSpacing = memo(Icon)
