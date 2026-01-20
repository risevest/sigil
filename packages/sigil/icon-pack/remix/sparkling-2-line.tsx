import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Sparkling2Line = /* @__PURE__ */ memo(function Sparkling2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17 1.208 1.32 2.473L20.792 5 18.32 6.319 17 8.792l-1.318-2.473-2.473-1.32 2.473-1.318zm-6.333 8.125 5 2.667-5 2.667-2.666 5-2.667-5-5-2.667 5-2.667 2.667-5zm.75 2.667L9.19 10.812 8.001 8.583l-1.189 2.229L4.584 12l2.228 1.188 1.189 2.229 1.188-2.229zm8.25 4.333-1.666-3.125-1.667 3.125L13.209 18l3.125 1.667 1.667 3.125 1.666-3.125L22.792 18z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sparkling 2 Line
 * @see {@link https://remixicon.com/icon/sparkling-2-line Remix Icon Docs}
 */
export { Sparkling2Line }
