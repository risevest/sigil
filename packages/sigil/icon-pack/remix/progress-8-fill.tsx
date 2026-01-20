import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Progress8Fill = /* @__PURE__ */ memo(function Progress8Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-4a6 6 0 1 1 0-12 6 6 0 0 1 0 12" />
    </Svg>
  )
})
/**
 * Remix Icon: Progress 8 Fill
 * @see {@link https://remixicon.com/icon/progress-8-fill Remix Icon Docs}
 */
export { Progress8Fill }
