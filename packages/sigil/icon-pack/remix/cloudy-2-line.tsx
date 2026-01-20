import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Cloudy2Line = /* @__PURE__ */ memo(function Cloudy2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21M7 19h10a4 4 0 1 0-.426-7.978 5 5 0 1 0-9.148 0A4 4 0 1 0 7 19" />
    </Svg>
  )
})
/**
 * Remix Icon: Cloudy 2 Line
 * @see {@link https://remixicon.com/icon/cloudy-2-line Remix Icon Docs}
 */
export { Cloudy2Line }
