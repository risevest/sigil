import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Slideshow4Line = /* @__PURE__ */ memo(function Slideshow4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.17 3A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 5v14h16V5h-4.17A3 3 0 0 1 13 7h-2a3 3 0 0 1-2.83-2zm7-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 6 5 3-5 3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slideshow 4 Line
 * @see {@link https://remixicon.com/icon/slideshow-4-line Remix Icon Docs}
 */
export { Slideshow4Line }
