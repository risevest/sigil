import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Progress1Fill = /* @__PURE__ */ memo(function Progress1Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-10V6a5.98 5.98 0 0 1 4.243 1.757z" />
    </Svg>
  )
})
/**
 * Remix Icon: Progress 1 Fill
 * @see {@link https://remixicon.com/icon/progress-1-fill Remix Icon Docs}
 */
export { Progress1Fill }
