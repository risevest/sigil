import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 4.07C16.07 4.45 18.57 6.59 19.54 9.43L13 5.65V4.07ZM8 5.08C9.18 4.39 11.33 4.02 11 4.06V11.41L8 13.14V5.08ZM4.63 15.1C4.23 14.14 4 13.1 4 12C4 9.98 4.76 8.14 6 6.73V14.31L4.63 15.1ZM5.64 16.83L12 13.15L15 14.88L8.02 18.91C7.09 18.38 6.28 17.68 5.64 16.83ZM12 20C11.46 20 10.93 19.94 10.42 19.84L17 16.04L18.36 16.82C16.9 18.75 14.6 20 12 20ZM13 11.42V7.96L20 12.01C20 13.11 19.77 14.15 19.37 15.1L13 11.42Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsVolleyball'

/**
 * Material Icon: Sports Volleyball
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_volleyball Material Icon Docs}
 */
export const SportsVolleyball = memo(Icon)
