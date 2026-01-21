import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContrastFill = /* @__PURE__ */ memo(function ContrastFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2v-16a8 8 0 0 0 0 16" />
    </Svg>
  )
})
/**
 * Remix Icon: Contrast Fill
 * @see {@link https://remixicon.com/icon/contrast-fill Remix Icon Docs}
 */
export { ContrastFill }
