import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArtboardFill = /* @__PURE__ */ memo(function ArtboardFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Artboard Fill
 * @see {@link https://remixicon.com/icon/artboard-fill Remix Icon Docs}
 */
export { ArtboardFill }
