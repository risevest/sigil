import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerRightUpFill = /* @__PURE__ */ memo(function CornerRightUpFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 19H5v-2h7V9.414H6.586L13 3l6.414 6.414H14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Right Up Fill
 * @see {@link https://remixicon.com/icon/corner-right-up-fill Remix Icon Docs}
 */
export { CornerRightUpFill }
