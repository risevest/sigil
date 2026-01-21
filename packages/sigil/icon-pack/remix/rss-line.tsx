import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RssLine = /* @__PURE__ */ memo(function RssLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 17a4 4 0 0 1 4 4H3zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16z" />
    </Svg>
  )
})
/**
 * Remix Icon: Rss Line
 * @see {@link https://remixicon.com/icon/rss-line Remix Icon Docs}
 */
export { RssLine }
