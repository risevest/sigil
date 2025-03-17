import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.62 18H13.38L15.38 14H13V6H21V13.24L18.62 18ZM16.62 16H17.38L19 12.76V8H15V12H18.62L16.62 16ZM8.62 18H3.38L5.38 14H3V6H11V13.24L8.62 18ZM6.62 16H7.38L9 12.76V8H5V12H8.62L6.62 16Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatQuote'

/**
 * Material Icon: Format Quote
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_quote Material Icon Docs}
 */
export const FormatQuote = memo(Icon)
