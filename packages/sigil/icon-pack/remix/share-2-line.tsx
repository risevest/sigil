import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Share2Line = /* @__PURE__ */ memo(function Share2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 2.586 6.207 6.207-1.414 1.414L13 6.414V16h-2V6.414l-3.793 3.793-1.414-1.414zM3 18v-4h2v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3" />
    </Svg>
  )
})
/**
 * Remix Icon: Share 2 Line
 * @see {@link https://remixicon.com/icon/share-2-line Remix Icon Docs}
 */
export { Share2Line }
