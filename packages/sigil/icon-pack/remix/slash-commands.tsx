import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SlashCommands = /* @__PURE__ */ memo(function SlashCommands(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h2v4H3zm6.788 18H7.66l6.551-18h2.129zM21 3h-2v4h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slash Commands
 * @see {@link https://remixicon.com/icon/slash-commands Remix Icon Docs}
 */
export { SlashCommands }
