import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m8.828 7.828L18 23.657l-2.828-2.829a4 4 0 1 1 5.656 0M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
Icon.displayName = 'UserLocationFill'
/**
 * Remix Icon: User Location Fill
 * @see {@link https://remixicon.com/icon/user-location-fill Remix Icon Docs}
 */
export const UserLocationFill = Icon
