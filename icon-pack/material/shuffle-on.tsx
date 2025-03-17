import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 1H3C1.9 1 1 1.9 1 3V21C1 22.1 1.9 23 3 23H21C22.1 23 23 22.1 23 21V3C23 1.9 22.1 1 21 1ZM5.41 4L10.59 9.17L9.18 10.59L4 5.42L5.41 4ZM20 20H14V18H16.61L13.41 14.8L14.83 13.38L18 16.55V14H20V20ZM20 10H18V7.42L5.41 20L4 18.59L16.58 6H14V4H20V10Z" />
    </Svg>
  )
}

Icon.displayName = 'ShuffleOn'

/**
 * Material Icon: Shuffle On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shuffle_on Material Icon Docs}
 */
export const ShuffleOn = memo(Icon)
