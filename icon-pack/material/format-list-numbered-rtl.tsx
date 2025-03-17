import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 17H20.5V17.5H19.5V18.5H20.5V19H18.5V20H21.5V16H18.5V17ZM19.5 8H20.5V4H18.5V5H19.5V8ZM18.5 11H20.3L18.5 13.1V14H21.5V13H19.7L21.5 10.9V10H18.5V11ZM2.5 5H16.5V7H2.5V5ZM2.5 17H16.5V19H2.5V17ZM2.5 11H16.5V13H2.5V11Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatListNumberedRtl'

/**
 * Material Icon: Format List Numbered Rtl
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_list_numbered_rtl Material Icon Docs}
 */
export const FormatListNumberedRtl = memo(Icon)
