import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 22-4-4h8zm0-20 4 4H8zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4M2 12l4-4v8zm20 0-4 4V8z" />
    </Svg>
  )
})
Icon.displayName = 'DragMoveFill'
/**
 * Remix Icon: Drag Move Fill
 * @see {@link https://remixicon.com/icon/drag-move-fill Remix Icon Docs}
 */
export const DragMoveFill = Icon
