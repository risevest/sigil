import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Timer2Fill = /* @__PURE__ */ memo(function Timer2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m3.536 5.05L10.586 12 12 13.414l4.95-4.95z" />
    </Svg>
  )
})
/**
 * Remix Icon: Timer 2 Fill
 * @see {@link https://remixicon.com/icon/timer-2-fill Remix Icon Docs}
 */
export { Timer2Fill }
