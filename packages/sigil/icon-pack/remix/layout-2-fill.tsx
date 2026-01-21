import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout2Fill = /* @__PURE__ */ memo(function Layout2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 3v18H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 10v7a1 1 0 0 1-1 1h-7v-8zM20 3a1 1 0 0 1 1 1v7h-8V3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout 2 Fill
 * @see {@link https://remixicon.com/icon/layout-2-fill Remix Icon Docs}
 */
export { Layout2Fill }
