import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlarmLine = /* @__PURE__ */ memo(function AlarmLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18m0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14m1-7h3v2h-5V8h2zM1.747 6.283l3.536-3.536 1.414 1.414L3.16 7.697zm16.97-3.536 3.536 3.536-1.414 1.414-3.536-3.536z" />
    </Svg>
  )
})
/**
 * Remix Icon: Alarm Line
 * @see {@link https://remixicon.com/icon/alarm-line Remix Icon Docs}
 */
export { AlarmLine }
