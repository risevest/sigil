import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Slideshow3Fill = /* @__PURE__ */ memo(function Slideshow3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zM10 7.5v6l5-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slideshow 3 Fill
 * @see {@link https://remixicon.com/icon/slideshow-3-fill Remix Icon Docs}
 */
export { Slideshow3Fill }
