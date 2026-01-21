import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CheckboxFill = /* @__PURE__ */ memo(function CheckboxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7.003 13 7.07-7.071-1.413-1.414-5.657 5.657-2.829-2.829-1.414 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Checkbox Fill
 * @see {@link https://remixicon.com/icon/checkbox-fill Remix Icon Docs}
 */
export { CheckboxFill }
