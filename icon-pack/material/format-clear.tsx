import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 7.06969V4.06969H7.39L10.39 7.06969H12.22L11.67 8.34969L13.76 10.4497L15.21 7.06969H21ZM4.41 3.92969L3 5.33969L9.97 12.3097L7.5 18.0697H10.5L12.07 14.4097L17.73 20.0697L19.14 18.6597L4.41 3.92969Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatClear'

/**
 * Material Icon: Format Clear
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_clear Material Icon Docs}
 */
export const FormatClear = memo(Icon)
