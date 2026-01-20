import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignLeft = /* @__PURE__ */ memo(function AlignLeft(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm0 15h14v2H3zm0-5h18v2H3zm0-5h14v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Align Left
 * @see {@link https://remixicon.com/icon/align-left Remix Icon Docs}
 */
export { AlignLeft }
