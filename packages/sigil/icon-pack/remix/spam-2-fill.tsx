import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Spam2Fill = /* @__PURE__ */ memo(function Spam2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.936 2.501 5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zM11 15.001v2h2v-2zm0-8v6h2V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Spam 2 Fill
 * @see {@link https://remixicon.com/icon/spam-2-fill Remix Icon Docs}
 */
export { Spam2Fill }
