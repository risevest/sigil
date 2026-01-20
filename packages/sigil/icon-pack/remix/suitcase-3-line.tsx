import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Suitcase3Line = /* @__PURE__ */ memo(function Suitcase3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1zm4 8H5v10h14zM9 10v8H7v-8zm4 0v8h-2v-8zm4 0v8h-2v-8zm-3-7h-4v4h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Suitcase 3 Line
 * @see {@link https://remixicon.com/icon/suitcase-3-line Remix Icon Docs}
 */
export { Suitcase3Line }
