import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShareForward2Line = /* @__PURE__ */ memo(function ShareForward2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zM16.172 7l-3.95-3.95 1.414-1.414L20 8l-6.364 6.364-1.414-1.415L16.172 9H5V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Share Forward 2 Line
 * @see {@link https://remixicon.com/icon/share-forward-2-line Remix Icon Docs}
 */
export { ShareForward2Line }
