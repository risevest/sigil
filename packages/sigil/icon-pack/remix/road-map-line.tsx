import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RoadMapLine = /* @__PURE__ */ memo(function RoadMapLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 6.143v12.824l5.065-2.17 6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V7zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0M12 12.657l2.828-2.829a4 4 0 1 0-5.656 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Road Map Line
 * @see {@link https://remixicon.com/icon/road-map-line Remix Icon Docs}
 */
export { RoadMapLine }
