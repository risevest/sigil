import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerRightDownFill = /* @__PURE__ */ memo(function CornerRightDownFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 5H5v2h7v7.586H6.586L13 21l6.414-6.414H14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Right Down Fill
 * @see {@link https://remixicon.com/icon/corner-right-down-fill Remix Icon Docs}
 */
export { CornerRightDownFill }
