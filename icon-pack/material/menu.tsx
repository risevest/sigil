import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
    </Svg>
  )
}

Icon.displayName = 'Menu'

/**
 * Material Icon: Menu
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:menu Material Icon Docs}
 */
export const Menu = memo(Icon)
