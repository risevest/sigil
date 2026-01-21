import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout5Fill = /* @__PURE__ */ memo(function Layout5Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 10v11H3a1 1 0 0 1-1-1V10zm15 0v10a1 1 0 0 1-1 1H9V10zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout 5 Fill
 * @see {@link https://remixicon.com/icon/layout-5-fill Remix Icon Docs}
 */
export { Layout5Fill }
