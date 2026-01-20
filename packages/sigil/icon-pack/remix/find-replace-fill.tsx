import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FindReplaceFill = /* @__PURE__ */ memo(function FindReplaceFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M16.659 9A6 6 0 0 0 11 5c-3.315 0-6 2.685-6 6h2a4 4 0 0 1 5.91-3.515L12 9zM17 11h-2a4 4 0 0 1-5.91 3.515L10 13H5.341A6 6 0 0 0 11 17c3.315 0 6-2.685 6-6" />
    </Svg>
  )
})
/**
 * Remix Icon: Find Replace Fill
 * @see {@link https://remixicon.com/icon/find-replace-fill Remix Icon Docs}
 */
export { FindReplaceFill }
