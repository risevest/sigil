import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NavigationFill = /* @__PURE__ */ memo(function NavigationFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2.9 2.3 18.805 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.261 2.912a.5.5 0 0 1 .638-.612" />
    </Svg>
  )
})
/**
 * Remix Icon: Navigation Fill
 * @see {@link https://remixicon.com/icon/navigation-fill Remix Icon Docs}
 */
export { NavigationFill }
