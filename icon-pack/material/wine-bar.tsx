import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 3V9C6 11.97 8.16 14.43 11 14.91V19H8V21H16V19H13V14.91C15.84 14.43 18 11.97 18 9V3H6ZM12 13C10.14 13 8.59 11.72 8.14 10H15.86C15.41 11.72 13.86 13 12 13ZM16 8H8V5H16V8Z" />
    </Svg>
  )
}

Icon.displayName = 'WineBar'

/**
 * Material Icon: Wine Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wine_bar Material Icon Docs}
 */
export const WineBar = memo(Icon)
