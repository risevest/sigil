import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4C13.44 4 14.79 4.38 15.95 5.05L17.4 3.6C15.85 2.59 13.99 2 12 2C10.01 2 8.15 2.59 6.59 3.59L8.04 5.04C9.21 4.38 10.56 4 12 4Z" />
      <Path d="M20 12C20 13.44 19.62 14.79 18.95 15.95L20.4 17.4C21.41 15.85 22 13.99 22 12C22 10.01 21.41 8.15 20.41 6.59L18.96 8.04C19.62 9.21 20 10.56 20 12Z" />
      <Path d="M12 20C10.56 20 9.21 19.62 8.05 18.95L6.6 20.4C8.15 21.41 10.01 22 12 22C13.99 22 15.85 21.41 17.41 20.41L15.96 18.96C14.79 19.62 13.44 20 12 20Z" />
      <Path d="M4 12C4 10.56 4.38 9.21 5.05 8.05L3.59 6.59C2.59 8.15 2 10.01 2 12C2 13.99 2.59 15.85 3.59 17.41L5.04 15.96C4.38 14.79 4 13.44 4 12Z" />
      <Path d="M11.5 6C9.02 6 7 8.02 7 10.5C7 11.72 7.49 12.91 8.35 13.77L9.71 15.13C9.88 15.3 10.02 15.57 10.15 15.95C10.56 17.17 11.71 18 13 18C14.65 18 16 16.65 16 15H14C14 15.55 13.55 16 13 16C12.57 16 12.19 15.73 12.05 15.32C11.9 14.88 11.65 14.24 11.12 13.71L9.76 12.35C9.28 11.87 9 11.19 9 10.5C9 9.12 10.12 8 11.5 8C12.71 8 13.72 8.86 13.95 10H15.97C15.72 7.75 13.81 6 11.5 6Z" />
      <Path d="M13.5 14C14.3284 14 15 13.3284 15 12.5C15 11.6716 14.3284 11 13.5 11C12.6716 11 12 11.6716 12 12.5C12 13.3284 12.6716 14 13.5 14Z" />
    </Svg>
  )
}

Icon.displayName = 'NoiseControlOff'

/**
 * Material Icon: Noise Control Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:noise_control_off Material Icon Docs}
 */
export const NoiseControlOff = memo(Icon)
