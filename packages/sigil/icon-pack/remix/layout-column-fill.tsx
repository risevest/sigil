import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutColumnFill = /* @__PURE__ */ memo(function LayoutColumnFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 5v14h7V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Column Fill
 * @see {@link https://remixicon.com/icon/layout-column-fill Remix Icon Docs}
 */
export { LayoutColumnFill }
