import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Music2Line = /* @__PURE__ */ memo(function Music2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3v14a4 4 0 1 1-2-3.465V5H9v12a4 4 0 1 1-2-3.465V3zM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Music 2 Line
 * @see {@link https://remixicon.com/icon/music-2-line Remix Icon Docs}
 */
export { Music2Line }
