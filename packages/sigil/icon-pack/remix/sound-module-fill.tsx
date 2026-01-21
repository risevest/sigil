import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SoundModuleFill = /* @__PURE__ */ memo(function SoundModuleFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 18v3h-2v-3h-2v-3h6v3zM5 18v3H3v-3H1v-3h6v3zm6-12V3h2v3h2v3H9V6zm0 5h2v10h-2zm-8 2V3h2v10zm16 0V3h2v10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sound Module Fill
 * @see {@link https://remixicon.com/icon/sound-module-fill Remix Icon Docs}
 */
export { SoundModuleFill }
