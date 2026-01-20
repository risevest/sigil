import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlashlightLine = /* @__PURE__ */ memo(function FlashlightLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 9h8L11 24v-9H4l9-15zm-2 2V7.22L7.532 13H13v4.394L17.263 11z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flashlight Line
 * @see {@link https://remixicon.com/icon/flashlight-line Remix Icon Docs}
 */
export { FlashlightLine }
