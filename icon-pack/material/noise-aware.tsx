import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 15H14C14 15.55 13.55 16 13 16C12.57 16 12.19 15.73 12.05 15.32C11.9 14.88 11.65 14.24 11.12 13.71L9.75996 12.35C9.27996 11.87 8.99996 11.19 8.99996 10.5C8.99996 9.12 10.12 8 11.5 8C12.71 8 13.72 8.86 13.95 10H15.97C15.72 7.75 13.81 6 11.5 6C9.01996 6 6.99996 8.02 6.99996 10.5C6.99996 11.72 7.48996 12.91 8.34996 13.77L9.70996 15.13C9.87996 15.3 10.02 15.57 10.15 15.95C10.56 17.17 11.71 18 13 18C14.65 18 16 16.65 16 15Z" />
      <Path d="M13.5 14C14.3284 14 15 13.3284 15 12.5C15 11.6716 14.3284 11 13.5 11C12.6715 11 12 11.6716 12 12.5C12 13.3284 12.6715 14 13.5 14Z" />
      <Path d="M3.59996 6.58L5.17996 7.84C5.52996 7.27 5.94996 6.74 6.41996 6.27L4.84996 5.02C4.37996 5.49 3.96996 6.02 3.59996 6.58Z" />
      <Path d="M9.45996 4.42L8.58996 2.61C7.95996 2.84 7.34996 3.13 6.78996 3.48L7.65996 5.29C8.21996 4.93 8.81996 4.64 9.45996 4.42Z" />
      <Path d="M4.48996 9.26L2.52996 8.81C2.31996 9.44 2.16996 10.09 2.08996 10.76L4.04996 11.21C4.10996 10.53 4.26996 9.88 4.48996 9.26Z" />
      <Path d="M20.4 6.58C20.04 6.02 19.62 5.49 19.15 5.02L17.57 6.28C18.05 6.75 18.46 7.27 18.81 7.85L20.4 6.58Z" />
      <Path d="M4.03996 12.79L2.07996 13.24C2.15996 13.91 2.30996 14.57 2.51996 15.19L4.48996 14.74C4.26996 14.12 4.10996 13.47 4.03996 12.79Z" />
      <Path d="M17.21 3.48C16.64 3.13 16.04 2.84 15.41 2.61L14.54 4.42C15.18 4.64 15.78 4.93 16.34 5.29L17.21 3.48Z" />
      <Path d="M13 4.07V2.05C12.67 2.02 12.34 2 12 2C11.66 2 11.33 2.02 11 2.05V4.07C11.33 4.03 11.66 4 12 4C12.34 4 12.67 4.03 13 4.07Z" />
      <Path d="M11 19.93V21.95C11.33 21.98 11.66 22 12 22C12.34 22 12.67 21.98 13 21.95V19.93C12.67 19.97 12.34 20 12 20C11.66 20 11.33 19.97 11 19.93Z" />
      <Path d="M19.51 14.74L21.48 15.19C21.69 14.56 21.84 13.91 21.92 13.24L19.96 12.79C19.89 13.47 19.73 14.12 19.51 14.74Z" />
      <Path d="M19.96 11.21L21.92 10.76C21.84 10.09 21.69 9.43 21.48 8.81L19.51 9.26C19.73 9.88 19.89 10.53 19.96 11.21Z" />
      <Path d="M17.58 17.73L19.16 18.99C19.63 18.51 20.04 17.99 20.41 17.43L18.83 16.17C18.47 16.73 18.05 17.26 17.58 17.73Z" />
      <Path d="M6.78996 20.52C7.35996 20.87 7.95996 21.16 8.58996 21.39L9.45996 19.58C8.81996 19.36 8.21996 19.07 7.65996 18.71L6.78996 20.52Z" />
      <Path d="M14.54 19.58L15.41 21.39C16.04 21.16 16.65 20.87 17.21 20.52L16.34 18.71C15.78 19.07 15.18 19.36 14.54 19.58Z" />
      <Path d="M3.59996 17.42C3.95996 17.98 4.37996 18.51 4.84996 18.98L6.42996 17.72C5.94996 17.25 5.53996 16.73 5.18996 16.15L3.59996 17.42Z" />
    </Svg>
  )
}

Icon.displayName = 'NoiseAware'

/**
 * Material Icon: Noise Aware
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:noise_aware Material Icon Docs}
 */
export const NoiseAware = memo(Icon)
