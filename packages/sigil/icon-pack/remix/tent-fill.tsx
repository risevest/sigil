import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TentFill = /* @__PURE__ */ memo(function TentFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12.866 3 9.237 16H23v2H1v-2h.896l9.238-16a1 1 0 0 1 1.732 0M12 12.925 8.659 19h6.682z" />
    </Svg>
  )
})
/**
 * Remix Icon: Tent Fill
 * @see {@link https://remixicon.com/icon/tent-fill Remix Icon Docs}
 */
export { TentFill }
