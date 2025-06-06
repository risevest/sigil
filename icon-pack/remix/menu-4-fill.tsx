import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" />
    </Svg>
  )
}

Icon.displayName = 'Menu4Fill'

/**
 * Remix Icon: Menu 4 Fill
 * @see {@link https://remixicon.com/icon/menu-4-fill Remix Icon Docs}
 */
export const Menu4Fill = memo(Icon)
