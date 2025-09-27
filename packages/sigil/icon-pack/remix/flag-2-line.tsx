import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21.138 3a.5.5 0 0 1 .434.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4v5H2V3zm-2.584 2H4v10h14.554l-2.857-5z" />
    </Svg>
  )
})
Icon.displayName = 'Flag2Line'
/**
 * Remix Icon: Flag 2 Line
 * @see {@link https://remixicon.com/icon/flag-2-line Remix Icon Docs}
 */
export const Flag2Line = Icon
