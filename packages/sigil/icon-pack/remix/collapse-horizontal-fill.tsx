import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CollapseHorizontalFill = /* @__PURE__ */ memo(function CollapseHorizontalFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.5 12 4.95-4.95-.001 3.95H23v2h-4.552v3.947zM1 13h4.55v3.95L10.5 12 5.55 7.05V11H1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Collapse Horizontal Fill
 * @see {@link https://remixicon.com/icon/collapse-horizontal-fill Remix Icon Docs}
 */
export { CollapseHorizontalFill }
