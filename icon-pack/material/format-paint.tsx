import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 4V3C17.5 2.45 17.05 2 16.5 2H4.5C3.95 2 3.5 2.45 3.5 3V7C3.5 7.55 3.95 8 4.5 8H16.5C17.05 8 17.5 7.55 17.5 7V6H18.5V10H8.5V21C8.5 21.55 8.95 22 9.5 22H11.5C12.05 22 12.5 21.55 12.5 21V12H20.5V4H17.5ZM15.5 6H5.5V4H15.5V6Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatPaint'

/**
 * Material Icon: Format Paint
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_paint Material Icon Docs}
 */
export const FormatPaint = memo(Icon)
