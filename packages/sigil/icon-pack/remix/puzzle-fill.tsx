import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 4a3 3 0 1 1 5.83 1H18a1 1 0 0 1 1 1v4.17a3 3 0 1 1 0 5.659V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.17C8.06 4.687 8 4.35 8 4" />
    </Svg>
  )
})
Icon.displayName = 'PuzzleFill'
/**
 * Remix Icon: Puzzle Fill
 * @see {@link https://remixicon.com/icon/puzzle-fill Remix Icon Docs}
 */
export const PuzzleFill = Icon
