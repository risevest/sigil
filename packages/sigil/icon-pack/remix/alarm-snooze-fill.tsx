import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlarmSnoozeFill = /* @__PURE__ */ memo(function AlarmSnoozeFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 13a9 9 0 1 0 18 0 9 9 0 0 0-18 0M5.283 2.747 1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536-3.535-3.536-1.415 1.414 3.536 3.536zM9 11V9h6v2.414L11.414 15H15v2H9v-2.414L12.586 11z" />
    </Svg>
  )
})
/**
 * Remix Icon: Alarm Snooze Fill
 * @see {@link https://remixicon.com/icon/alarm-snooze-fill Remix Icon Docs}
 */
export { AlarmSnoozeFill }
