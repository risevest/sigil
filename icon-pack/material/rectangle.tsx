import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4V20H22V4H2ZM20 18H4V6H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Rectangle'

/**
 * Material Icon: Rectangle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rectangle Material Icon Docs}
 */
export const Rectangle = memo(Icon)
