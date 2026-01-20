import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SplitCellsVertical = /* @__PURE__ */ memo(function SplitCellsVertical(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001zm-7 1 3 3h-2v6h2l-3 3-3-3h2V9H9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Split Cells Vertical
 * @see {@link https://remixicon.com/icon/split-cells-vertical Remix Icon Docs}
 */
export { SplitCellsVertical }
