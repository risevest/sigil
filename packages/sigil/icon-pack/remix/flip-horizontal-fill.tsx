import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 2v20h2V2zM7 6v12H4V6zM4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm11 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z" />
    </Svg>
  )
})
Icon.displayName = 'FlipHorizontalFill'
/**
 * Remix Icon: Flip Horizontal Fill
 * @see {@link https://remixicon.com/icon/flip-horizontal-fill Remix Icon Docs}
 */
export const FlipHorizontalFill = Icon
