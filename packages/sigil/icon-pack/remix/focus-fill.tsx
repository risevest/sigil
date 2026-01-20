import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FocusFill = /* @__PURE__ */ memo(function FocusFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" />
    </Svg>
  )
})
/**
 * Remix Icon: Focus Fill
 * @see {@link https://remixicon.com/icon/focus-fill Remix Icon Docs}
 */
export { FocusFill }
