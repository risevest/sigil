import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 7.42L13 6.27V3.9C13 3.64 13.22 3.42 13.5 3.42C13.78 3.42 14 3.63 14 3.9V4.5H16V3.9C16 2.57 14.88 1.5 13.5 1.5C12.12 1.5 11 2.57 11 3.9V6.27L9.5 7.42L6 6.57L11.05 21.82C11.2 22.27 11.6 22.5 12 22.5C12.4 22.5 12.8 22.27 12.95 21.81L18 6.57L14.5 7.42ZM13.28 9L14.04 9.58L14.96 9.35L13 15.3V8.79L13.28 9ZM9.96 9.59L10.72 9.01L11 8.79V15.3L9.03 9.36L9.96 9.59Z" />
    </Svg>
  )
}

Icon.displayName = 'Umbrella'

/**
 * Material Icon: Umbrella
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:umbrella Material Icon Docs}
 */
export const Umbrella = memo(Icon)
