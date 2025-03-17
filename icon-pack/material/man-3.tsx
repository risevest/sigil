import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 7.12465H10C8.9 7.12465 8 8.02465 8 9.12465V15.1247H10V22.1247H14V15.1247H16V9.12465C16 8.02465 15.1 7.12465 14 7.12465Z" />
      <Path d="M14.2485 4.12455L11.9999 1.87598L9.75132 4.12455L11.9999 6.37313L14.2485 4.12455Z" />
    </Svg>
  )
}

Icon.displayName = 'Man3'

/**
 * Material Icon: Man 3
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:man_3 Material Icon Docs}
 */
export const Man3 = memo(Icon)
