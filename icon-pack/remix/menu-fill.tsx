import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuFill'

/**
 * Remix Icon: Menu Fill
 * @see {@link https://remixicon.com/icon/menu-fill Remix Icon Docs}
 */
export const MenuFill = memo(Icon)
