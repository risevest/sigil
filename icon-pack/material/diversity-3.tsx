import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.32 13.01C7.28 13.03 8.17 13.51 8.77 14.35C9.5 15.38 10.71 16 12 16C13.29 16 14.5 15.38 15.23 14.34C15.83 13.5 16.72 13.02 17.68 13C16.96 11.78 14.08 11 12 11C9.93 11 7.04 11.78 6.32 13.01Z" />
      <Path d="M4 13C5.66 13 7 11.66 7 10C7 8.34 5.66 7 4 7C2.34 7 1 8.34 1 10C1 11.66 2.34 13 4 13Z" />
      <Path d="M20 13C21.66 13 23 11.66 23 10C23 8.34 21.66 7 20 7C18.34 7 17 8.34 17 10C17 11.66 18.34 13 20 13Z" />
      <Path d="M12 10C13.66 10 15 8.66 15 7C15 5.34 13.66 4 12 4C10.34 4 9 5.34 9 7C9 8.66 10.34 10 12 10Z" />
      <Path d="M21 14H17.73C16.96 14 16.38 14.45 16.05 14.92C16.01 14.98 14.69 17 12 17C10.57 17 8.97 16.36 7.95 14.92C7.56 14.37 6.95 14 6.27 14H3C1.9 14 1 14.9 1 16V20H8V17.74C9.15 18.54 10.54 19 12 19C13.46 19 14.85 18.54 16 17.74V20H23V16C23 14.9 22.1 14 21 14Z" />
    </Svg>
  )
}

Icon.displayName = 'Diversity3'

/**
 * Material Icon: Diversity 3
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:diversity_3 Material Icon Docs}
 */
export const Diversity3 = memo(Icon)
