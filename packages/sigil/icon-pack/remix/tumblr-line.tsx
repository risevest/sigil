import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TumblrLine = /* @__PURE__ */ memo(function TumblrLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.001 8c1.075 0 3.497-.673 3.497-4.5V2h1.5v6h5.003v2h-5.003v2.91c.003 2.48.003 3.686.003 4.09-.002 2.208 1.615 3.4 4.785 3.4V22h-2.242c-2.402.002-4.546-2.035-4.546-4.546V10H7.001V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Tumblr Line
 * @see {@link https://remixicon.com/icon/tumblr-line Remix Icon Docs}
 */
export { TumblrLine }
