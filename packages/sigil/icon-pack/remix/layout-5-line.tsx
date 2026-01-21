import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout5Line = /* @__PURE__ */ memo(function Layout5Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm4-11H4v9h3zm13 0H9v9h11zm0-5H4v3h16z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout 5 Line
 * @see {@link https://remixicon.com/icon/layout-5-line Remix Icon Docs}
 */
export { Layout5Line }
