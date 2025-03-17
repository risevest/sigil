import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 1.01L8.5 1C7.4 1 6.5 1.9 6.5 3V6H8.5V5H18.5V19H8.5V18H6.5V21C6.5 22.1 7.4 23 8.5 23H18.5C19.6 23 20.5 22.1 20.5 21V3C20.5 1.9 19.6 1.01 18.5 1.01ZM10.5 15H12.5V8H5.5V10H9.09L3.5 15.59L4.91 17L10.5 11.41V15Z" />
    </Svg>
  )
}

Icon.displayName = 'AddToHomeScreen'

/**
 * Material Icon: Add To Home Screen
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_to_home_screen Material Icon Docs}
 */
export const AddToHomeScreen = memo(Icon)
