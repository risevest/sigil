import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShareForwardBoxFill = /* @__PURE__ */ memo(function ShareForwardBoxFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7 2V1l7 6h-9a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Share Forward Box Fill
 * @see {@link https://remixicon.com/icon/share-forward-box-fill Remix Icon Docs}
 */
export { ShareForwardBoxFill }
