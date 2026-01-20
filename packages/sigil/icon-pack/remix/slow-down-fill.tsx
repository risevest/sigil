import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SlowDownFill = /* @__PURE__ */ memo(function SlowDownFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 13c0 2.21.895 4.21 2.343 5.657L4.93 20.07A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A8 8 0 1 0 4 13m4.707-4.707L13.5 12.5l-2 2-4.207-4.793z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slow Down Fill
 * @see {@link https://remixicon.com/icon/slow-down-fill Remix Icon Docs}
 */
export { SlowDownFill }
