import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout6Fill = /* @__PURE__ */ memo(function Layout6Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 10v11H3a1 1 0 0 1-1-1V10zm7 0v10a1 1 0 0 1-1 1h-4V10zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout 6 Fill
 * @see {@link https://remixicon.com/icon/layout-6-fill Remix Icon Docs}
 */
export { Layout6Fill }
