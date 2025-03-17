import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 6.06V3H11V6.06C6.5 6.56 3 10.37 3 14.99C3 16.1 3.9 17 5.01 17H8C8 19.21 9.79 21 12 21C14.21 21 16 19.21 16 17H18.99C20.1 17 21 16.1 21 14.99C21 10.37 17.5 6.56 13 6.06ZM12 19C10.9 19 10 18.1 10 17H14C14 18.1 13.1 19 12 19ZM5 15C5 11.14 8.14 8 12 8C15.86 8 19 11.14 19 15H5Z" />
    </Svg>
  )
}

Icon.displayName = 'Light'

/**
 * Material Icon: Light
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:light Material Icon Docs}
 */
export const Light = memo(Icon)
