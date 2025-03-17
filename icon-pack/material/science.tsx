import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.0001 11.33L18.0001 18H6.00005L11.0001 11.33V6H13.0001M15.9601 4H8.04005C7.62005 4 7.39005 4.48 7.65005 4.81L9.00005 6.5V10.67L3.20005 18.4C2.71005 19.06 3.18005 20 4.00005 20H20.0001C20.8201 20 21.2901 19.06 20.8001 18.4L15.0001 10.67V6.5L16.3501 4.81C16.6101 4.48 16.3801 4 15.9601 4Z" />
    </Svg>
  )
}

Icon.displayName = 'Science'

/**
 * Material Icon: Science
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:science Material Icon Docs}
 */
export const Science = memo(Icon)
