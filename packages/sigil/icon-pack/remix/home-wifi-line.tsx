import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HomeWifiLine = /* @__PURE__ */ memo(function HomeWifiLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 19h12V9.157l-6-5.454-6 5.454zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M8 10a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5zm0 4a3 3 0 0 1 3 3H8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Home Wifi Line
 * @see {@link https://remixicon.com/icon/home-wifi-line Remix Icon Docs}
 */
export { HomeWifiLine }
