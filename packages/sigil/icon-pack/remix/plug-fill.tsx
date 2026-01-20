import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlugFill = /* @__PURE__ */ memo(function PlugFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4v-4h16v4a4 4 0 0 1-4 4zm3-12h3a1 1 0 0 1 1 1v2H4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2zm-4 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Plug Fill
 * @see {@link https://remixicon.com/icon/plug-fill Remix Icon Docs}
 */
export { PlugFill }
