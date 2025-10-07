import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-2 3H5v2h14z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutTop2Fill'
/**
 * Remix Icon: Layout Top 2 Fill
 * @see {@link https://remixicon.com/icon/layout-top-2-fill Remix Icon Docs}
 */
export const LayoutTop2Fill = Icon
