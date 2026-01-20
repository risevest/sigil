import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ClockwiseLine = /* @__PURE__ */ memo(function ClockwiseLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m20 10.586 1.828-1.829 1.415 1.415L19 14.414l-4.243-4.242 1.415-1.415L18 10.586V8a3 3 0 0 0-3-3h-4V3h4a5 5 0 0 1 5 5zM13 9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm-1 2H4v8h8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Clockwise Line
 * @see {@link https://remixicon.com/icon/clockwise-line Remix Icon Docs}
 */
export { ClockwiseLine }
