import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 5.144V16h12.34zM4 2.932c0-.86 1.015-1.32 1.66-.75l15.99 14.067c.692.61.262 1.751-.66 1.751H6v4H4z" />
    </Svg>
  )
})
Icon.displayName = 'TriangularFlagLine'
/**
 * Remix Icon: Triangular Flag Line
 * @see {@link https://remixicon.com/icon/triangular-flag-line Remix Icon Docs}
 */
export const TriangularFlagLine = Icon
