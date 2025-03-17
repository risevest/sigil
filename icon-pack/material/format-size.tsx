import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.5 4.5V7.5H13.5V19.5H16.5V7.5H21.5V4.5H8.5ZM2.5 12.5H5.5V19.5H8.5V12.5H11.5V9.5H2.5V12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatSize'

/**
 * Material Icon: Format Size
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_size Material Icon Docs}
 */
export const FormatSize = memo(Icon)
