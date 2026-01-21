import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExternalLinkLine = /* @__PURE__ */ memo(function ExternalLinkLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3z" />
    </Svg>
  )
})
/**
 * Remix Icon: External Link Line
 * @see {@link https://remixicon.com/icon/external-link-line Remix Icon Docs}
 */
export { ExternalLinkLine }
