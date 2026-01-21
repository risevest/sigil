import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TwitchLine = /* @__PURE__ */ memo(function TwitchLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.301 3h16.7v11.7l-4.7 4.7h-3.9l-2.5 2.4h-2.9v-2.4h-4V6.2zm.7 14.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5h-14zm10-9.4h2v4.7h-2zm0 0h2v4.7h-2zm-5 0h2v4.7h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Twitch Line
 * @see {@link https://remixicon.com/icon/twitch-line Remix Icon Docs}
 */
export { TwitchLine }
