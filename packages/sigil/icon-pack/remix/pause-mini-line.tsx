import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PauseMiniLine = /* @__PURE__ */ memo(function PauseMiniLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM7 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Pause Mini Line
 * @see {@link https://remixicon.com/icon/pause-mini-line Remix Icon Docs}
 */
export { PauseMiniLine }
