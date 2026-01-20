import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout4Line = /* @__PURE__ */ memo(function Layout4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 10H5v6h6zm2 6h6V5h-6zM11 5H5v6h6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout 4 Line
 * @see {@link https://remixicon.com/icon/layout-4-line Remix Icon Docs}
 */
export { Layout4Line }
