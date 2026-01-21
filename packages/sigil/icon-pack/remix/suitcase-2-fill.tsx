import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Suitcase2Fill = /* @__PURE__ */ memo(function Suitcase2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1zM10 9H8v9h2zm6 0h-2v9h2zm-2-5h-4v1h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Suitcase 2 Fill
 * @see {@link https://remixicon.com/icon/suitcase-2-fill Remix Icon Docs}
 */
export { Suitcase2Fill }
