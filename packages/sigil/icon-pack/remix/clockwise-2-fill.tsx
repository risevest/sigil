import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Clockwise2Fill = /* @__PURE__ */ memo(function Clockwise2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 4V1l5 4-5 4V6H8a3 3 0 0 0-3 3v4H3V9a5 5 0 0 1 5-5zm-1 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Clockwise 2 Fill
 * @see {@link https://remixicon.com/icon/clockwise-2-fill Remix Icon Docs}
 */
export { Clockwise2Fill }
