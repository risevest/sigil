import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V5H4z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutBottomLine'
/**
 * Remix Icon: Layout Bottom Line
 * @see {@link https://remixicon.com/icon/layout-bottom-line Remix Icon Docs}
 */
export const LayoutBottomLine = Icon
