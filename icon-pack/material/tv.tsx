import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 22.99 18.1 22.99 17L23 5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z" />
    </Svg>
  )
}

Icon.displayName = 'Tv'

/**
 * Material Icon: Tv
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tv Material Icon Docs}
 */
export const Tv = memo(Icon)
