import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CheckboxCircleLine = /* @__PURE__ */ memo(function CheckboxCircleLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m5.457 7.457-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914z" />
    </Svg>
  )
})
/**
 * Remix Icon: Checkbox Circle Line
 * @see {@link https://remixicon.com/icon/checkbox-circle-line Remix Icon Docs}
 */
export { CheckboxCircleLine }
