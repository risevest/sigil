import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExternalLinkFill = /* @__PURE__ */ memo(function ExternalLinkFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3z" />
    </Svg>
  )
})
/**
 * Remix Icon: External Link Fill
 * @see {@link https://remixicon.com/icon/external-link-fill Remix Icon Docs}
 */
export { ExternalLinkFill }
