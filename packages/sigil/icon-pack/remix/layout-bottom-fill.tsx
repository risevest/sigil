import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 16v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4zM21 3a1 1 0 0 1 1 1v10H2V4a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutBottomFill'
/**
 * Remix Icon: Layout Bottom Fill
 * @see {@link https://remixicon.com/icon/layout-bottom-fill Remix Icon Docs}
 */
export const LayoutBottomFill = Icon
