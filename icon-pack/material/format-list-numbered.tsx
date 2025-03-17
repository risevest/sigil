import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.5 17H4.5V17.5H3.5V18.5H4.5V19H2.5V20H5.5V16H2.5V17ZM3.5 8H4.5V4H2.5V5H3.5V8ZM2.5 11H4.3L2.5 13.1V14H5.5V13H3.7L5.5 10.9V10H2.5V11ZM7.5 5V7H21.5V5H7.5ZM7.5 19H21.5V17H7.5V19ZM7.5 13H21.5V11H7.5V13Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatListNumbered'

/**
 * Material Icon: Format List Numbered
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_list_numbered Material Icon Docs}
 */
export const FormatListNumbered = memo(Icon)
