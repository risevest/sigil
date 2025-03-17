import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 11H11V21H13V11H16L12 7L8 11ZM4 3V5H20V3H4Z" />
    </Svg>
  )
}

Icon.displayName = 'VerticalAlignTop'

/**
 * Material Icon: Vertical Align Top
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vertical_align_top Material Icon Docs}
 */
export const VerticalAlignTop = memo(Icon)
