import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlagFill = /* @__PURE__ */ memo(function FlagFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flag Fill
 * @see {@link https://remixicon.com/icon/flag-fill Remix Icon Docs}
 */
export { FlagFill }
