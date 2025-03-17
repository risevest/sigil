import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 4V8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4ZM16 2H8C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10V15H10V4H12V15H14V4H16V2ZM16 14V17H4V19H16V22L20 18L16 14Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatTextdirectionLToR'

/**
 * Material Icon: Format Textdirection L To R
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_textdirection_l_to_r Material Icon Docs}
 */
export const FormatTextdirectionLToR = memo(Icon)
