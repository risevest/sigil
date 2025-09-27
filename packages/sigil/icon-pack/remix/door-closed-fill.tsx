import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.998 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2zm12-10h-2v2h2z" />
    </Svg>
  )
})
Icon.displayName = 'DoorClosedFill'
/**
 * Remix Icon: Door Closed Fill
 * @see {@link https://remixicon.com/icon/door-closed-fill Remix Icon Docs}
 */
export const DoorClosedFill = Icon
