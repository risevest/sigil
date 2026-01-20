import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlarmWarningLine = /* @__PURE__ */ memo(function AlarmWarningLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2zm2 0h12v-6a6 6 0 0 0-12 0zm5-18h2v3h-2zm8.778 2.808 1.414 1.414-2.12 2.121-1.415-1.414zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344zM7 14a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Alarm Warning Line
 * @see {@link https://remixicon.com/icon/alarm-warning-line Remix Icon Docs}
 */
export { AlarmWarningLine }
