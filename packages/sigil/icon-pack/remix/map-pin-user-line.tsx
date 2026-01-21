import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MapPinUserLine = /* @__PURE__ */ memo(function MapPinUserLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.084 15.812a7 7 0 1 0-10.168 0A6 6 0 0 1 12 13a6 6 0 0 1 5.084 2.812m-8.699 1.473L12 20.899l3.615-3.614a4 4 0 0 0-7.23 0M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Map Pin User Line
 * @see {@link https://remixicon.com/icon/map-pin-user-line Remix Icon Docs}
 */
export { MapPinUserLine }
