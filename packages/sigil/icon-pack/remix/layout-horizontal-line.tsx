import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 5h10V7H7zm10 4H7v-2h10zM7 17h10v-2H7z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutHorizontalLine'
/**
 * Remix Icon: Layout Horizontal Line
 * @see {@link https://remixicon.com/icon/layout-horizontal-line Remix Icon Docs}
 */
export const LayoutHorizontalLine = Icon
