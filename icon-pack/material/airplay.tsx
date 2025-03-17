import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 21.5H18L12 15.5L6 21.5Z" />
      <Path d="M21 2.5H3C1.9 2.5 1 3.4 1 4.5V16.5C1 17.6 1.9 18.5 3 18.5H7V16.5H3V4.5H21V16.5H17V18.5H21C22.1 18.5 23 17.6 23 16.5V4.5C23 3.4 22.1 2.5 21 2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Airplay'

/**
 * Material Icon: Airplay
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airplay Material Icon Docs}
 */
export const Airplay = memo(Icon)
