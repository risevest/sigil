import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutGrid2Line = /* @__PURE__ */ memo(function LayoutGrid2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 10h4v4H4zm0 9v-3h4v3zm6 0v-3h4v3zm6 0v-3h4v3zm0-5v-4h4v4zm0-6V5h4v3zm-2-3v3h-4V5zm0 5v4h-4v-4zM4 8V5h4v3zM3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Grid 2 Line
 * @see {@link https://remixicon.com/icon/layout-grid-2-line Remix Icon Docs}
 */
export { LayoutGrid2Line }
