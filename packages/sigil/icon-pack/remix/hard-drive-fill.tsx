import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13.95 2H20a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.05q.494.05 1 .05c5.523 0 10-4.477 10-10q0-.506-.05-1M15 16v2h2v-2zM11.938 2Q12 2.492 12 3a8 8 0 0 1-9 7.938V3a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
Icon.displayName = 'HardDriveFill'
/**
 * Remix Icon: Hard Drive Fill
 * @see {@link https://remixicon.com/icon/hard-drive-fill Remix Icon Docs}
 */
export const HardDriveFill = Icon
