import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GolfBallFill = /* @__PURE__ */ memo(function GolfBallFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8-5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Golf Ball Fill
 * @see {@link https://remixicon.com/icon/golf-ball-fill Remix Icon Docs}
 */
export { GolfBallFill }
