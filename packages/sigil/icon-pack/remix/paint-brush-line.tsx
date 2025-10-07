import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 4.997v3h14v-3zm-1-2h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1m2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2zm11.732 1.732L19.5 11.96l1.768 1.768a2.5 2.5 0 1 1-3.536 0" />
    </Svg>
  )
})
Icon.displayName = 'PaintBrushLine'
/**
 * Remix Icon: Paint Brush Line
 * @see {@link https://remixicon.com/icon/paint-brush-line Remix Icon Docs}
 */
export const PaintBrushLine = Icon
