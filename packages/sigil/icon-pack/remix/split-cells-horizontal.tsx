import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2zm4 4 3 3-3 3v-2H9v2l-3-3 3-3v2h6z" />
    </Svg>
  )
})
Icon.displayName = 'SplitCellsHorizontal'
/**
 * Remix Icon: Split Cells Horizontal
 * @see {@link https://remixicon.com/icon/split-cells-horizontal Remix Icon Docs}
 */
export const SplitCellsHorizontal = Icon
