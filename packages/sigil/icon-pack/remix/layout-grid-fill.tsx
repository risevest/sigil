import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001zm-11 0V21H3a1 1 0 0 1-1-1v-7.001zM11 3v7.999H2V4a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v6.999h-9V3z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutGridFill'
/**
 * Remix Icon: Layout Grid Fill
 * @see {@link https://remixicon.com/icon/layout-grid-fill Remix Icon Docs}
 */
export const LayoutGridFill = Icon
