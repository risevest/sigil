import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RectangleLine = /* @__PURE__ */ memo(function RectangleLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 2v12h16V6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Rectangle Line
 * @see {@link https://remixicon.com/icon/rectangle-line Remix Icon Docs}
 */
export { RectangleLine }
