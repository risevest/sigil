import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AddBoxLine = /* @__PURE__ */ memo(function AddBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Add Box Line
 * @see {@link https://remixicon.com/icon/add-box-line Remix Icon Docs}
 */
export { AddBoxLine }
