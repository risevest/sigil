import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RadioLine = /* @__PURE__ */ memo(function RadioLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 10V8h-2v2H5V6h14v4zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM4 5v14h16V5zm4 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Radio Line
 * @see {@link https://remixicon.com/icon/radio-line Remix Icon Docs}
 */
export { RadioLine }
