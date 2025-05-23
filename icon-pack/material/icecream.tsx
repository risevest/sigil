import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.38 6.24C17.79 3.24 15.14 1 12 1C8.86 1 6.21 3.24 5.62 6.24C4.08 6.81 3 8.29 3 10C3 12.21 4.79 14 7 14C7.12 14 7.23 13.98 7.34 13.98L12.07 23L16.68 13.97C16.79 13.98 16.89 14 17 14C19.21 14 21 12.21 21 10C21 8.29 19.92 6.81 18.38 6.24ZM12.05 18.63L9.32 13.42C10.15 13.79 11.06 14 12 14C12.95 14 13.88 13.79 14.72 13.4L12.05 18.63ZM17 12C16.48 12 15.99 11.8 15.61 11.44L15.05 10.9L14.39 11.32C13.68 11.76 12.86 12 12 12C11.14 12 10.32 11.76 9.61 11.31L8.95 10.9L8.39 11.44C8.01 11.79 7.52 12 7 12C5.9 12 5 11.11 5 10C5 9.02 5.72 8.18 6.68 8.03L7.45 7.9L7.51 7.12C7.71 4.8 9.66 3 12 3C14.34 3 16.29 4.8 16.48 7.12L16.54 7.9L17.31 8.02C18.28 8.18 19 9.01 19 10C19 11.1 18.1 12 17 12Z" />
    </Svg>
  )
}

Icon.displayName = 'Icecream'

/**
 * Material Icon: Icecream
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:icecream Material Icon Docs}
 */
export const Icecream = memo(Icon)
