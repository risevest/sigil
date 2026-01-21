import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RemoteControl2Fill = /* @__PURE__ */ memo(function RemoteControl2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 13h-2v2h2zm-4 0H9v2h2zm2-9h-2v2H9v2h1.999L11 12h2l-.001-2H15V8h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Remote Control 2 Fill
 * @see {@link https://remixicon.com/icon/remote-control-2-fill Remix Icon Docs}
 */
export { RemoteControl2Fill }
