import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.67 19C16.72 19 16.58 20 15.34 20C14.15 20 13.92 19 12.01 19C10.06 19 9.91 20 8.67 20C7.43 20 7.29 19 5.34 19C3.39 19 3.24 20 2 20V22C3.95 22 4.11 21 5.34 21C6.58 21 6.72 22 8.67 22C10.62 22 10.77 21 12.01 21C13.23 21 13.41 22 15.34 22C17.27 22 17.44 21 18.67 21C19.89 21 20.07 22 22 22V20C20.76 20 20.62 19 18.67 19Z" />
      <Path d="M8.68 17.5C10.63 17.5 10.77 16.5 12.01 16.5C13.2 16.5 13.43 17.5 15.34 17.5C17.29 17.5 17.43 16.5 18.67 16.5C19.86 16.5 20.07 17.48 21.98 17.5V15.5C21.35 15.5 20.98 15.22 20.5 14.95L18.48 7.42L20.57 8.27L21.31 6.41L9.78 2L2 11.61L3.57 12.84L4.96 11.06L5.89 14.54C5.71 14.52 5.54 14.49 5.33 14.49C3.38 14.49 3.24 15.49 2 15.49V17.49C3.9 17.49 4.17 16.49 5.35 16.49C6.54 16.5 6.77 17.5 8.68 17.5ZM10.42 4.41L16.16 6.5L18.31 14.52C16.77 14.63 16.49 15.41 15.46 15.48L14.04 10.17L10.18 11.21L11.09 14.6C9.97 14.85 9.68 15.5 8.67 15.5C8.49 15.5 8.34 15.48 8.22 15.45L6.5 9.09L10.42 4.41Z" />
    </Svg>
  )
}

Icon.displayName = 'Flood'

/**
 * Material Icon: Flood
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flood Material Icon Docs}
 */
export const Flood = memo(Icon)
