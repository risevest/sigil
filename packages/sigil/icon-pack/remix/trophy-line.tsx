import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TrophyLine = /* @__PURE__ */ memo(function TrophyLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-7-11.937v4a6 6 0 1 0 12 0v-4zm-5 0h2v4h-2zm20 0h2v4h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Trophy Line
 * @see {@link https://remixicon.com/icon/trophy-line Remix Icon Docs}
 */
export { TrophyLine }
