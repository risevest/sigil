import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignItemVerticalCenterLine = /* @__PURE__ */ memo(
  function AlignItemVerticalCenterLine(_props: IconProps) {
    const { color = 'black', size = 24, ...props } = _props
    return (
      <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
        <Path d="M9 18V6H6v12zm-4 2a1 1 0 0 1-1-1v-6H2v-2h2V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6h2V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4h2v2h-2v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4h-2v6a1 1 0 0 1-1 1zm10-4h3V8h-3z" />
      </Svg>
    )
  }
)
/**
 * Remix Icon: Align Item Vertical Center Line
 * @see {@link https://remixicon.com/icon/align-item-vertical-center-line Remix Icon Docs}
 */
export { AlignItemVerticalCenterLine }
