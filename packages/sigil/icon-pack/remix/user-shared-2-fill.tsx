import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m6 4v-3.5l5 4.5-5 4.5V19h-3v-2z" />
    </Svg>
  )
})
Icon.displayName = 'UserShared2Fill'
/**
 * Remix Icon: User Shared 2 Fill
 * @see {@link https://remixicon.com/icon/user-shared-2-fill Remix Icon Docs}
 */
export const UserShared2Fill = Icon
