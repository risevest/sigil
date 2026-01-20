import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShutDownLine = /* @__PURE__ */ memo(function ShutDownLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m6.265 3.807 1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.99 9.99 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4.265-8.193M11 12V2h2v10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Shut Down Line
 * @see {@link https://remixicon.com/icon/shut-down-line Remix Icon Docs}
 */
export { ShutDownLine }
