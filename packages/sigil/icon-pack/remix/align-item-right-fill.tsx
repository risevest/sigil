import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignItemRightFill = /* @__PURE__ */ memo(function AlignItemRightFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 21V3h2v18zM7 14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM4 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Align Item Right Fill
 * @see {@link https://remixicon.com/icon/align-item-right-fill Remix Icon Docs}
 */
export { AlignItemRightFill }
