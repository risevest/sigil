import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-1-9.208V16h2v-3.208a2.5 2.5 0 1 0-2 0" />
    </Svg>
  )
})
Icon.displayName = 'DoorLockFill'
/**
 * Remix Icon: Door Lock Fill
 * @see {@link https://remixicon.com/icon/door-lock-fill Remix Icon Docs}
 */
export const DoorLockFill = Icon
