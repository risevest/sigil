import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DiscFill = /* @__PURE__ */ memo(function DiscFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2q.507 0 1 .05z" />
    </Svg>
  )
})
/**
 * Remix Icon: Disc Fill
 * @see {@link https://remixicon.com/icon/disc-fill Remix Icon Docs}
 */
export { DiscFill }
