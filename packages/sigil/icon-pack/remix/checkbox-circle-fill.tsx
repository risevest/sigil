import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CheckboxCircleFill = /* @__PURE__ */ memo(function CheckboxCircleFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.457-12.543L11 15.914l-4.207-4.207 1.414-1.414L11 13.086l5.043-5.043z" />
    </Svg>
  )
})
/**
 * Remix Icon: Checkbox Circle Fill
 * @see {@link https://remixicon.com/icon/checkbox-circle-fill Remix Icon Docs}
 */
export { CheckboxCircleFill }
