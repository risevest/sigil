import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout2Line = /* @__PURE__ */ memo(function Layout2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 5H5v14h6zm8 8h-6v6h6zm0-8h-6v6h6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout 2 Line
 * @see {@link https://remixicon.com/icon/layout-2-line Remix Icon Docs}
 */
export { Layout2Line }
