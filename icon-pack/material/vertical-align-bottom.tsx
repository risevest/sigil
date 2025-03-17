import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 13H13V3H11V13H8L12 17L16 13ZM4 19V21H20V19H4Z" />
    </Svg>
  )
}

Icon.displayName = 'VerticalAlignBottom'

/**
 * Material Icon: Vertical Align Bottom
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vertical_align_bottom Material Icon Docs}
 */
export const VerticalAlignBottom = memo(Icon)
