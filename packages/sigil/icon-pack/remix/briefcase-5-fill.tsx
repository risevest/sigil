import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-1 8V7H4v6zm2-6v6h3v-2h2v2h3V7zm10 6h2V7h-2zM9 3v2h6V3z" />
    </Svg>
  )
})
Icon.displayName = 'Briefcase5Fill'
/**
 * Remix Icon: Briefcase 5 Fill
 * @see {@link https://remixicon.com/icon/briefcase-5-fill Remix Icon Docs}
 */
export const Briefcase5Fill = Icon
