import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 9.792V16h2v-3.208a2.5 2.5 0 1 0-2 0" />
    </Svg>
  )
})
Icon.displayName = 'DoorLockBoxFill'
/**
 * Remix Icon: Door Lock Box Fill
 * @see {@link https://remixicon.com/icon/door-lock-box-fill Remix Icon Docs}
 */
export const DoorLockBoxFill = Icon
