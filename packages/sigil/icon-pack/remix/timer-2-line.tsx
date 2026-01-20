import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Timer2Line = /* @__PURE__ */ memo(function Timer2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m3.536-12.95 1.414 1.414-4.95 4.95L10.586 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Timer 2 Line
 * @see {@link https://remixicon.com/icon/timer-2-line Remix Icon Docs}
 */
export { Timer2Line }
