import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Eye2Fill = /* @__PURE__ */ memo(function Eye2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 5c-.513 0-1.008.077-1.473.22a2.5 2.5 0 1 1-3.306 3.307A5 5 0 1 0 12 7" />
    </Svg>
  )
})
/**
 * Remix Icon: Eye 2 Fill
 * @see {@link https://remixicon.com/icon/eye-2-fill Remix Icon Docs}
 */
export { Eye2Fill }
