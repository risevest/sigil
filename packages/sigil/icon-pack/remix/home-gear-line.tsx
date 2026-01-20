import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HomeGearLine = /* @__PURE__ */ memo(function HomeGearLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454-6 5.454zm2.591-5.191a3.5 3.5 0 0 1 0-1.622l-.991-.572 1-1.732.991.573a3.5 3.5 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573 1 1.731-.991.573a3.5 3.5 0 0 1 0 1.622l.991.572-1 1.731-.991-.572a3.5 3.5 0 0 1-1.404.811v1.145h-2V16.35a3.5 3.5 0 0 1-1.404-.811l-.991.572-1-1.73zm3.404.688a1.5 1.5 0 1 0 0-2.998 1.5 1.5 0 0 0 0 2.998" />
    </Svg>
  )
})
/**
 * Remix Icon: Home Gear Line
 * @see {@link https://remixicon.com/icon/home-gear-line Remix Icon Docs}
 */
export { HomeGearLine }
