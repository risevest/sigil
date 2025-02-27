import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Menu3Fill'

/**
 * Remix Icon: Menu 3 Fill
 * @see {@link https://remixicon.com/icon/menu-3-fill Remix Icon Docs}
 */
export const Menu3Fill = memo(Icon)
