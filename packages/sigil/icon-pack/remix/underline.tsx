import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Underline = /* @__PURE__ */ memo(function Underline(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 3v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0V3zM4 20h16v2H4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Underline
 * @see {@link https://remixicon.com/icon/underline Remix Icon Docs}
 */
export { Underline }
