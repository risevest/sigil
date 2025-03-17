import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 18.5H22V22.5H2V18.5ZM5.49 15.5H7.91L9.18 11.92H14.83L16.09 15.5H18.51L13.25 1.5H10.75L5.49 15.5ZM9.91 9.89L11.94 4.1H12.06L14.09 9.89H9.91Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatColorText'

/**
 * Material Icon: Format Color Text
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_color_text Material Icon Docs}
 */
export const FormatColorText = memo(Icon)
