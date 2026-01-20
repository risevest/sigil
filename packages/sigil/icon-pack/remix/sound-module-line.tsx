import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SoundModuleLine = /* @__PURE__ */ memo(function SoundModuleLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 18v3h-2v-3h-2v-2h6v2zM5 18v3H3v-3H1v-2h6v2zm6-12V3h2v3h2v2H9V6zm0 4h2v11h-2zm-8 4V3h2v11zm16 0V3h2v11z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sound Module Line
 * @see {@link https://remixicon.com/icon/sound-module-line Remix Icon Docs}
 */
export { SoundModuleLine }
