import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerLeftUpFill = /* @__PURE__ */ memo(function CornerLeftUpFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 19h9v-2h-7V9.414h5.414L11 3 4.586 9.414H10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Left Up Fill
 * @see {@link https://remixicon.com/icon/corner-left-up-fill Remix Icon Docs}
 */
export { CornerLeftUpFill }
