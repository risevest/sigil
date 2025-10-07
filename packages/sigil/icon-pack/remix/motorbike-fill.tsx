import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.365 10 11.2 8h3.492L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 1 1-1.985.392L15.419 10h-.947l-1.582 5.87-2.925 1.069q.035.276.035.561a4.5 4.5 0 1 1-6-4.244V12H2v-2zM5.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    </Svg>
  )
})
Icon.displayName = 'MotorbikeFill'
/**
 * Remix Icon: Motorbike Fill
 * @see {@link https://remixicon.com/icon/motorbike-fill Remix Icon Docs}
 */
export const MotorbikeFill = Icon
