import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
      <Path d="M11.5 7.5H7.5V11.5H11.5V7.5Z" />
      <Path d="M16.5 7.5H12.5V11.5H16.5V7.5Z" />
      <Path d="M11.5 12.5H7.5V16.5H11.5V12.5Z" />
      <Path d="M16.5 12.5H12.5V16.5H16.5V12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewCompactAlt'

/**
 * Material Icon: View Compact Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_compact_alt Material Icon Docs}
 */
export const ViewCompactAlt = memo(Icon)
