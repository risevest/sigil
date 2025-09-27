import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 6h-2V5H5v14h14v-1h2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM6 6h2v3H6zm9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
Icon.displayName = 'PolaroidLine'
/**
 * Remix Icon: Polaroid Line
 * @see {@link https://remixicon.com/icon/polaroid-line Remix Icon Docs}
 */
export const PolaroidLine = Icon
