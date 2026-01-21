import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GlassesFill = /* @__PURE__ */ memo(function GlassesFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1 12a5 5 0 0 1 8.192-3.848A3.99 3.99 0 0 1 12 7c1.095 0 2.086.44 2.808 1.152a5 5 0 1 1-1.264 1.578A2 2 0 0 0 12 9c-.62 0-1.177.283-1.544.73A5 5 0 1 1 1 12" />
    </Svg>
  )
})
/**
 * Remix Icon: Glasses Fill
 * @see {@link https://remixicon.com/icon/glasses-fill Remix Icon Docs}
 */
export { GlassesFill }
