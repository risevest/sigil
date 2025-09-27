import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9 6-6 6 6 6zm6 12 6-6-6-6z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandLeftRightFill'
/**
 * Remix Icon: Expand Left Right Fill
 * @see {@link https://remixicon.com/icon/expand-left-right-fill Remix Icon Docs}
 */
export const ExpandLeftRightFill = Icon
