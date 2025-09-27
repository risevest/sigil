import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m8 4h3v2h-3v3.5L15 18l5-4.5z" />
    </Svg>
  )
})
Icon.displayName = 'UserReceived2Fill'
/**
 * Remix Icon: User Received 2 Fill
 * @see {@link https://remixicon.com/icon/user-received-2-fill Remix Icon Docs}
 */
export const UserReceived2Fill = Icon
