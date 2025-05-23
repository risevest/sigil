import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1 9H3V7H1V9ZM1 13H3V11H1V13ZM1 5H3V3C1.9 3 1 3.9 1 5ZM9 21H11V19H9V21ZM1 17H3V15H1V17ZM3 21V19H1C1 20.1 1.9 21 3 21ZM21 3H13V9H23V5C23 3.9 22.1 3 21 3ZM21 17H23V15H21V17ZM9 5H11V3H9V5ZM5 21H7V19H5V21ZM5 5H7V3H5V5ZM21 21C22.1 21 23 20.1 23 19H21V21ZM21 13H23V11H21V13ZM13 21H15V19H13V21ZM17 21H19V19H17V21Z" />
    </Svg>
  )
}

Icon.displayName = 'TabUnselected'

/**
 * Material Icon: Tab Unselected
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tab_unselected Material Icon Docs}
 */
export const TabUnselected = memo(Icon)
