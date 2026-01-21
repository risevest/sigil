import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VuejsFill = /* @__PURE__ */ memo(function VuejsFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1.001 3h4l7 12 7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035l-6.368 11L5.633 3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Vuejs Fill
 * @see {@link https://remixicon.com/icon/vuejs-fill Remix Icon Docs}
 */
export { VuejsFill }
