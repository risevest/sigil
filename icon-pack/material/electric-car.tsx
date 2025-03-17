import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1H6.5C5.84 1 5.29 1.42 5.08 2.01L3 8V16C3 16.55 3.45 17 4 17H5C5.55 17 6 16.55 6 16V15H18V16C18 16.55 18.45 17 19 17H20C20.55 17 21 16.55 21 16V8L18.92 2.01ZM6.85 3H17.14L18.22 6.11H5.77L6.85 3ZM19 13H5V8H19V13Z" />
      <Path d="M7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12Z" />
      <Path d="M16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12Z" />
      <Path d="M7 20H11V18L17 21H13V23L7 20Z" />
    </Svg>
  )
}

Icon.displayName = 'ElectricCar'

/**
 * Material Icon: Electric Car
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:electric_car Material Icon Docs}
 */
export const ElectricCar = memo(Icon)
