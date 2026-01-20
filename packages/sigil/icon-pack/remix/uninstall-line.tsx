import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UninstallLine = /* @__PURE__ */ memo(function UninstallLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm10.999 14h-14L5 20h14zM17 17v2h-2v-2zM12 2l4 4h-3v5h-2V6H8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Uninstall Line
 * @see {@link https://remixicon.com/icon/uninstall-line Remix Icon Docs}
 */
export { UninstallLine }
