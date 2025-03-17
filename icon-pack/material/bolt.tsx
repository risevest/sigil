import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.9955 21H9.99545L10.9955 14H7.49545C6.61545 14 7.16545 13.25 7.18545 13.22C8.47545 10.94 10.4155 7.54 13.0055 3H14.0055L13.0055 10H16.5155C16.9155 10 17.1355 10.19 16.9155 10.66C12.9655 17.55 10.9955 21 10.9955 21Z" />
    </Svg>
  )
}

Icon.displayName = 'Bolt'

/**
 * Material Icon: Bolt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bolt Material Icon Docs}
 */
export const Bolt = memo(Icon)
