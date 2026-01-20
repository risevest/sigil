import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoonFoggyFill = /* @__PURE__ */ memo(function MoonFoggyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 20.335V18h-2v-4H3.332A9.5 9.5 0 0 1 3 11.5c0-4.56 3.213-8.37 7.5-9.289a8 8 0 0 0 11.49 9.724 9.5 9.5 0 0 1-5.99 8.4M7 20h7v2H7zm-5-4h10v2H2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Moon Foggy Fill
 * @see {@link https://remixicon.com/icon/moon-foggy-fill Remix Icon Docs}
 */
export { MoonFoggyFill }
