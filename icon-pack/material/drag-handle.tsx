import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 9H4V11H20V9ZM4 15H20V13H4V15Z" />
    </Svg>
  )
}

Icon.displayName = 'DragHandle'

/**
 * Material Icon: Drag Handle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:drag_handle Material Icon Docs}
 */
export const DragHandle = memo(Icon)
