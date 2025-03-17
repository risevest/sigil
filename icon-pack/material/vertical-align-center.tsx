import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 19H11V23H13V19H16L12 15L8 19ZM16 5H13V1H11V5H8L12 9L16 5ZM4 11V13H20V11H4Z" />
    </Svg>
  )
}

Icon.displayName = 'VerticalAlignCenter'

/**
 * Material Icon: Vertical Align Center
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vertical_align_center Material Icon Docs}
 */
export const VerticalAlignCenter = memo(Icon)
