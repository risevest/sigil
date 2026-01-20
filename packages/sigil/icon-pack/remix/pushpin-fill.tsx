import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PushpinFill = /* @__PURE__ */ memo(function PushpinFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m22.313 10.175-1.415 1.414-.707-.707-4.242 4.243-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707 4.242-4.243-.707-.707 1.414-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Pushpin Fill
 * @see {@link https://remixicon.com/icon/pushpin-fill Remix Icon Docs}
 */
export { PushpinFill }
