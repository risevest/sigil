import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HomeSmile2Line = /* @__PURE__ */ memo(function HomeSmile2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 19V9.799l-7-5.522-7 5.522V19zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786zM7 12h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Home Smile 2 Line
 * @see {@link https://remixicon.com/icon/home-smile-2-line Remix Icon Docs}
 */
export { HomeSmile2Line }
