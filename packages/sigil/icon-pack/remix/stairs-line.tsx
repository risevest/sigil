import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3h6v18H3v-6h4v-4h4V7h4zm2 2v4h-4v4H9v4H5v2h14V5z" />
    </Svg>
  )
})
Icon.displayName = 'StairsLine'
/**
 * Remix Icon: Stairs Line
 * @see {@link https://remixicon.com/icon/stairs-line Remix Icon Docs}
 */
export const StairsLine = Icon
