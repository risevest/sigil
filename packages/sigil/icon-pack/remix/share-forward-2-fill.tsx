import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShareForward2Fill = /* @__PURE__ */ memo(function ShareForward2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zm8-9H9a6 6 0 0 0-4.854 2.473A8 8 0 0 1 12 6V2l8 6-8 6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Share Forward 2 Fill
 * @see {@link https://remixicon.com/icon/share-forward-2-fill Remix Icon Docs}
 */
export { ShareForward2Fill }
