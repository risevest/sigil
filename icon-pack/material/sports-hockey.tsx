import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 17V20H4V16H3C2.45 16 2 16.45 2 17Z" />
      <Path d="M9 16H5V20L9.69 19.99C10.07 19.99 10.41 19.78 10.58 19.44L11.45 17.54L9.86 14.06L9 16Z" />
      <Path d="M21.71 16.29C21.53 16.11 21.28 16 21 16H20V20H22V17C22 16.72 21.89 16.47 21.71 16.29Z" />
      <Path d="M13.6 12.84L17.65 4H14.3L12.54 7.97L12.05 9.07L12 9.21L9.7 4H6.35L11.92 16.16L12 16.34L13.42 19.44C13.59 19.78 13.93 19.99 14.31 19.99L19 20V16H15L13.6 12.84Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsHockey'

/**
 * Material Icon: Sports Hockey
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_hockey Material Icon Docs}
 */
export const SportsHockey = memo(Icon)
