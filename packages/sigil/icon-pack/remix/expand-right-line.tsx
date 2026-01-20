import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandRightLine = /* @__PURE__ */ memo(function ExpandRightLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.172 11-4.657-4.657 1.414-1.414L21 12l-7.071 7.071-1.414-1.414L17.172 13H8v-2zM4 19V5h2v14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Right Line
 * @see {@link https://remixicon.com/icon/expand-right-line Remix Icon Docs}
 */
export { ExpandRightLine }
