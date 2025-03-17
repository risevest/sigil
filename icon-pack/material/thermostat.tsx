import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 13V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V13C7.79 13.91 7 15.37 7 17C7 19.76 9.24 22 12 22C14.76 22 17 19.76 17 17C17 15.37 16.21 13.91 15 13ZM11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5H12V6H13V8H12V9H13V11H11V5Z" />
    </Svg>
  )
}

Icon.displayName = 'Thermostat'

/**
 * Material Icon: Thermostat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:thermostat Material Icon Docs}
 */
export const Thermostat = memo(Icon)
