import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM14 15H16V5H12V7H14V15ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17Z" />
    </Svg>
  )
}

Icon.displayName = 'Filter1'

/**
 * Material Icon: Filter 1
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_1 Material Icon Docs}
 */
export const Filter1 = memo(Icon)
