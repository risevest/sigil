import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CelsiusLine = /* @__PURE__ */ memo(function CelsiusLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.5 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M22 10h-2a4 4 0 0 0-8 0v5a4 4 0 0 0 8 0h2a6 6 0 0 1-12 0v-5a6 6 0 0 1 12 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Celsius Line
 * @see {@link https://remixicon.com/icon/celsius-line Remix Icon Docs}
 */
export { CelsiusLine }
