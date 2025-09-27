import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 14V7h2v10zm4-10h2v10h-2zm4 0h2v10h-2z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutVerticalFill'
/**
 * Remix Icon: Layout Vertical Fill
 * @see {@link https://remixicon.com/icon/layout-vertical-fill Remix Icon Docs}
 */
export const LayoutVerticalFill = Icon
