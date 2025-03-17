import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 6V14H19V22H21V2C18.24 2 16 4.24 16 6ZM11 9H9V2H7V9H5V2H3V9C3 11.21 4.79 13 7 13V22H9V13C11.21 13 13 11.21 13 9V2H11V9Z" />
    </Svg>
  )
}

Icon.displayName = 'Restaurant'

/**
 * Material Icon: Restaurant
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:restaurant Material Icon Docs}
 */
export const Restaurant = memo(Icon)
