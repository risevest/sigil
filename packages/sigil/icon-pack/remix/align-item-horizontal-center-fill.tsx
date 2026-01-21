import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignItemHorizontalCenterFill = /* @__PURE__ */ memo(
  function AlignItemHorizontalCenterFill(_props: IconProps) {
    const { color = 'black', size = 24, ...props } = _props
    return (
      <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
        <Path d="M11 4V2h2v2h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6v2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4v2h-2v-2H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4v-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      </Svg>
    )
  }
)
/**
 * Remix Icon: Align Item Horizontal Center Fill
 * @see {@link https://remixicon.com/icon/align-item-horizontal-center-fill Remix Icon Docs}
 */
export { AlignItemHorizontalCenterFill }
