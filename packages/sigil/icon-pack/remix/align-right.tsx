import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignRight = /* @__PURE__ */ memo(function AlignRight(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm4 15h14v2H7zm-4-5h18v2H3zm4-5h14v2H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Align Right
 * @see {@link https://remixicon.com/icon/align-right Remix Icon Docs}
 */
export { AlignRight }
