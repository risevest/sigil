import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13 1 .001 3.062A8.004 8.004 0 0 1 19.938 11H23v2l-3.062.001a8.004 8.004 0 0 1-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 0 1-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0 1 11 4.062V1zm-1 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </Svg>
  )
})
Icon.displayName = 'Focus3Line'
/**
 * Remix Icon: Focus 3 Line
 * @see {@link https://remixicon.com/icon/focus-3-line Remix Icon Docs}
 */
export const Focus3Line = Icon
