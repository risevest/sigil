import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 6H0V11H0.01L0 20C0 21.1 0.9 22 2 22H20V20H2V6ZM7 15H21L17.5 10.5L15 13.51L11.5 9L7 15ZM22 4H14L12 2H6C4.9 2 4.01 2.9 4.01 4L4 16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V6C24 4.9 23.1 4 22 4ZM22 16H6V4H11.17L13.17 6H22V16Z" />
    </Svg>
  )
}

Icon.displayName = 'PermMedia'

/**
 * Material Icon: Perm Media
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:perm_media Material Icon Docs}
 */
export const PermMedia = memo(Icon)
