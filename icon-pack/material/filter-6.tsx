import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM13 15H15C16.1 15 17 14.11 17 13V11C17 9.89 16.1 9 15 9H13V7H17V5H13C11.9 5 11 5.89 11 7V13C11 14.11 11.9 15 13 15ZM13 11H15V13H13V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Filter6'

/**
 * Material Icon: Filter 6
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_6 Material Icon Docs}
 */
export const Filter6 = memo(Icon)
