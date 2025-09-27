import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 13v8H4a1 1 0 0 1-1-1v-7zm2-10h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7zM3 4a1 1 0 0 1 1-1h7v8H3z" />
    </Svg>
  )
})
Icon.displayName = 'Layout4Fill'
/**
 * Remix Icon: Layout 4 Fill
 * @see {@link https://remixicon.com/icon/layout-4-fill Remix Icon Docs}
 */
export const Layout4Fill = Icon
