import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignItemTopFill = /* @__PURE__ */ memo(function AlignItemTopFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3H3v2h18zm-7 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM4 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Align Item Top Fill
 * @see {@link https://remixicon.com/icon/align-item-top-fill Remix Icon Docs}
 */
export { AlignItemTopFill }
