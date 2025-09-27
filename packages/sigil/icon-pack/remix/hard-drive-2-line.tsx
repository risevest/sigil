import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 14h14V4H5zm0 2v4h14v-4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m11 15h2v2h-2z" />
    </Svg>
  )
})
Icon.displayName = 'HardDrive2Line'
/**
 * Remix Icon: Hard Drive 2 Line
 * @see {@link https://remixicon.com/icon/hard-drive-2-line Remix Icon Docs}
 */
export const HardDrive2Line = Icon
