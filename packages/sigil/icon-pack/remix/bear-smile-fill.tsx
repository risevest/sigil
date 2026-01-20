import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BearSmileFill = /* @__PURE__ */ memo(function BearSmileFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103a9 9 0 1 1-18 0c0-1.09.194-2.136.55-3.103a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.5 4.5 0 0 1 17.5 2M10 13H8a4 4 0 0 0 8 0h-2a2 2 0 1 1-4 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Bear Smile Fill
 * @see {@link https://remixicon.com/icon/bear-smile-fill Remix Icon Docs}
 */
export { BearSmileFill }
