import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SlashCommands2 = /* @__PURE__ */ memo(function SlashCommands2(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm5.723 13L16.58 6h-2.303L7.42 18z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slash Commands 2
 * @see {@link https://remixicon.com/icon/slash-commands-2 Remix Icon Docs}
 */
export { SlashCommands2 }
