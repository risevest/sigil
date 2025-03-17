import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3V5H5V3H19ZM12 7C8.13 7 5 10.13 5 14C5 17.87 8.13 21 12 21C15.87 21 19 17.87 19 14C19 10.13 15.87 7 12 7ZM12 18.5C9.51 18.5 7.5 16.49 7.5 14C7.5 11.51 9.51 9.5 12 9.5C14.49 9.5 16.5 11.51 16.5 14C16.5 16.49 14.49 18.5 12 18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatOverline'

/**
 * Material Icon: Format Overline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_overline Material Icon Docs}
 */
export const FormatOverline = memo(Icon)
