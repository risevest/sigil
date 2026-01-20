import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Strikethrough2 = /* @__PURE__ */ memo(function Strikethrough2(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 9h-2V6H5V4h14v2h-6zm0 6v5h-2v-5zM3 11h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Strikethrough 2
 * @see {@link https://remixicon.com/icon/strikethrough-2 Remix Icon Docs}
 */
export { Strikethrough2 }
