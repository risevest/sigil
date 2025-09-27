import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 10h-3v1h-2v-1H8v4h8zM8 7v6h3v-1h2v1h3V7zm-2 6V7H4v6zm12 0h2V7h-2zM6 15H4v4h2zm12 0v4h2v-4zM9 3v2h6V3z" />
    </Svg>
  )
})
Icon.displayName = 'Briefcase5Line'
/**
 * Remix Icon: Briefcase 5 Line
 * @see {@link https://remixicon.com/icon/briefcase-5-line Remix Icon Docs}
 */
export const Briefcase5Line = Icon
