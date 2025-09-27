import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 2 4.243 4.243-1.415 1.414L12 4.828 9.172 7.657 7.757 6.243zM2 12l4.243-4.243 1.414 1.415L4.828 12l2.829 2.828-1.414 1.415zm20 0-4.243 4.243-1.414-1.415L19.172 12l-2.829-2.828 1.414-1.415zm-10 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 8-4.243-4.243 1.415-1.414L12 19.172l2.828-2.829 1.415 1.414z" />
    </Svg>
  )
})
Icon.displayName = 'DragMoveLine'
/**
 * Remix Icon: Drag Move Line
 * @see {@link https://remixicon.com/icon/drag-move-line Remix Icon Docs}
 */
export const DragMoveLine = Icon
