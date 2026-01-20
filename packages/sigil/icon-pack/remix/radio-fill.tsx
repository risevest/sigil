import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RadioFill = /* @__PURE__ */ memo(function RadioFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 10h3V6H4v4h11V8h2zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zm1 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Radio Fill
 * @see {@link https://remixicon.com/icon/radio-fill Remix Icon Docs}
 */
export { RadioFill }
