import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM17 13V11.5C17 10.67 16.33 10 15.5 10C16.33 10 17 9.33 17 8.5V7C17 5.89 16.1 5 15 5H11V7H15V9H13V11H15V13H11V15H15C16.1 15 17 14.11 17 13Z" />
    </Svg>
  )
}

Icon.displayName = 'Filter3'

/**
 * Material Icon: Filter 3
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_3 Material Icon Docs}
 */
export const Filter3 = memo(Icon)
