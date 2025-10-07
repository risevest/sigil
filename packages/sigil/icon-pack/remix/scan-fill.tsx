import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.257 5.671 12 13.414 13.414 12 5.671 4.257A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329" />
    </Svg>
  )
})
Icon.displayName = 'ScanFill'
/**
 * Remix Icon: Scan Fill
 * @see {@link https://remixicon.com/icon/scan-fill Remix Icon Docs}
 */
export const ScanFill = Icon
