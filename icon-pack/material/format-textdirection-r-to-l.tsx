import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 4V8C8.9 8 8 7.1 8 6C8 4.9 8.9 4 10 4ZM18 2H10C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10V15H12V4H14V15H16V4H18V2ZM8 14L4 18L8 22V19H20V17H8V14Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatTextdirectionRToL'

/**
 * Material Icon: Format Textdirection R To L
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_textdirection_r_to_l Material Icon Docs}
 */
export const FormatTextdirectionRToL = memo(Icon)
