import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DoorLockBoxLine = /* @__PURE__ */ memo(function DoorLockBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6 7.792a2.5 2.5 0 1 1 2 0V16h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Door Lock Box Line
 * @see {@link https://remixicon.com/icon/door-lock-box-line Remix Icon Docs}
 */
export { DoorLockBoxLine }
