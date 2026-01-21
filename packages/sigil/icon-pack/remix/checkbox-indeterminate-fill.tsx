import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CheckboxIndeterminateFill = /* @__PURE__ */ memo(function CheckboxIndeterminateFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 8v2h10v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Checkbox Indeterminate Fill
 * @see {@link https://remixicon.com/icon/checkbox-indeterminate-fill Remix Icon Docs}
 */
export { CheckboxIndeterminateFill }
