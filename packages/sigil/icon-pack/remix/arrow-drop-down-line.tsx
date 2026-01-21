import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDropDownLine = /* @__PURE__ */ memo(function ArrowDropDownLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 15-4.243-4.242 1.415-1.414L12 12.172l2.828-2.828 1.415 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Drop Down Line
 * @see {@link https://remixicon.com/icon/arrow-drop-down-line Remix Icon Docs}
 */
export { ArrowDropDownLine }
