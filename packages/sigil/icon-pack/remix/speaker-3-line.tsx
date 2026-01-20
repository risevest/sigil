import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Speaker3Line = /* @__PURE__ */ memo(function Speaker3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Speaker 3 Line
 * @see {@link https://remixicon.com/icon/speaker-3-line Remix Icon Docs}
 */
export { Speaker3Line }
