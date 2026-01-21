import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TBoxFill = /* @__PURE__ */ memo(function TBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 8H7v2h4v7h2v-7h4zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: T Box Fill
 * @see {@link https://remixicon.com/icon/t-box-fill Remix Icon Docs}
 */
export { TBoxFill }
