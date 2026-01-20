import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerLeftDownFill = /* @__PURE__ */ memo(function CornerLeftDownFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 5h9v2h-7v7.586h5.414L11 21l-6.414-6.414H10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Left Down Fill
 * @see {@link https://remixicon.com/icon/corner-left-down-fill Remix Icon Docs}
 */
export { CornerLeftDownFill }
