import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 5H5v14h6zm2 0v14h6V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </Svg>
  )
})
Icon.displayName = 'LayoutColumnLine'
/**
 * Remix Icon: Layout Column Line
 * @see {@link https://remixicon.com/icon/layout-column-line Remix Icon Docs}
 */
export const LayoutColumnLine = Icon
