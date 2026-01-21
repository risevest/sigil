import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NurseFill = /* @__PURE__ */ memo(function NurseFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.957 15.564A8.01 8.01 0 0 1 19.94 22H4.063a8.01 8.01 0 0 1 4.981-6.436L12.001 20zM18.001 2v6A6 6 0 0 1 6 8V2zm-2 6H8a4 4 0 0 0 8 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Nurse Fill
 * @see {@link https://remixicon.com/icon/nurse-fill Remix Icon Docs}
 */
export { NurseFill }
