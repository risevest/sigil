import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlashlightFill = /* @__PURE__ */ memo(function FlashlightFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 10h7l-9 13v-9H4l9-13z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flashlight Fill
 * @see {@link https://remixicon.com/icon/flashlight-fill Remix Icon Docs}
 */
export { FlashlightFill }
