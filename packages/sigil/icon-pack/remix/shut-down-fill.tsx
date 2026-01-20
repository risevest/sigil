import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShutDownFill = /* @__PURE__ */ memo(function ShutDownFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 2.05V12h2V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95" />
    </Svg>
  )
})
/**
 * Remix Icon: Shut Down Fill
 * @see {@link https://remixicon.com/icon/shut-down-fill Remix Icon Docs}
 */
export { ShutDownFill }
