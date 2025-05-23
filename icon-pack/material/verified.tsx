import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 11.99L20.56 9.2L20.9 5.51L17.29 4.69L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 11.99L3.44 14.78L3.1 18.48L6.71 19.3L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 11.99ZM19.05 13.47L18.49 14.12L18.57 14.97L18.75 16.92L16.01 17.54L15.57 18.28L14.58 19.96L12.8 19.19L12 18.85L11.21 19.19L9.43 19.96L8.44 18.29L8 17.55L5.26 16.93L5.44 14.97L5.52 14.12L4.96 13.47L3.67 12L4.96 10.52L5.52 9.87L5.43 9.01L5.25 7.07L7.99 6.45L8.43 5.71L9.42 4.03L11.2 4.8L12 5.14L12.79 4.8L14.57 4.03L15.56 5.71L16 6.45L18.74 7.07L18.56 9.02L18.48 9.87L19.04 10.52L20.33 11.99L19.05 13.47Z" />
      <Path d="M10.09 13.75L7.77 11.42L6.29 12.91L10.09 16.72L17.43 9.36L15.95 7.87L10.09 13.75Z" />
    </Svg>
  )
}

Icon.displayName = 'Verified'

/**
 * Material Icon: Verified
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:verified Material Icon Docs}
 */
export const Verified = memo(Icon)
