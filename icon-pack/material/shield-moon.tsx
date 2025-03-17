import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z" />
      <Path d="M9.01 14.33C10.76 16.5 14.13 16.57 15.97 14.4C16.2 14.13 16.05 13.72 15.71 13.66C14.42 13.45 13.23 12.68 12.53 11.46C11.82 10.24 11.75 8.83 12.21 7.6C12.33 7.27 12.05 6.94 11.7 7C8.36 7.62 6.81 11.61 9.01 14.33Z" />
    </Svg>
  )
}

Icon.displayName = 'ShieldMoon'

/**
 * Material Icon: Shield Moon
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shield_moon Material Icon Docs}
 */
export const ShieldMoon = memo(Icon)
