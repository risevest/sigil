import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 6V7h10v2zm0 4v-2h10v2zm10 4H7v-2h10z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutHorizontalFill'
/**
 * Remix Icon: Layout Horizontal Fill
 * @see {@link https://remixicon.com/icon/layout-horizontal-fill Remix Icon Docs}
 */
export const LayoutHorizontalFill = Icon
