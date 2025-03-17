import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H6V2H4V22H6V14H20L18 9L20 4ZM16.14 9.74L17.04 12H6V6H17.05L16.15 8.26L15.85 9L16.14 9.74ZM13 9C13 10.1 12.1 11 11 11C9.9 11 9 10.1 9 9C9 7.9 9.9 7 11 7C12.1 7 13 7.9 13 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Tour'

/**
 * Material Icon: Tour
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tour Material Icon Docs}
 */
export const Tour = memo(Icon)
