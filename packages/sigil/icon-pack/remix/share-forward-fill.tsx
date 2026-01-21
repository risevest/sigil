import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShareForwardFill = /* @__PURE__ */ memo(function ShareForwardFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Share Forward Fill
 * @see {@link https://remixicon.com/icon/share-forward-fill Remix Icon Docs}
 */
export { ShareForwardFill }
