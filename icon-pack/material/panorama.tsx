import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4ZM21 18H3V6H21V18ZM14.5 11L11 15.51L8.5 12.5L5 17H19L14.5 11Z" />
    </Svg>
  )
}

Icon.displayName = 'Panorama'

/**
 * Material Icon: Panorama
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:panorama Material Icon Docs}
 */
export const Panorama = memo(Icon)
