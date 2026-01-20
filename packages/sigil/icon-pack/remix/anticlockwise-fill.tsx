import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AnticlockwiseFill = /* @__PURE__ */ memo(function AnticlockwiseFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 10h3l-4 5-4-5h3V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3zm5-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Anticlockwise Fill
 * @see {@link https://remixicon.com/icon/anticlockwise-fill Remix Icon Docs}
 */
export { AnticlockwiseFill }
