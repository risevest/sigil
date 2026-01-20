import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RewindMiniFill = /* @__PURE__ */ memo(function RewindMiniFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 17.035a.5.5 0 0 1-.788.409l-7.133-5.035a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409zm1.079-4.626a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z" />
    </Svg>
  )
})
/**
 * Remix Icon: Rewind Mini Fill
 * @see {@link https://remixicon.com/icon/rewind-mini-fill Remix Icon Docs}
 */
export { RewindMiniFill }
