import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AB = /* @__PURE__ */ memo(function AB(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 0 1-4-4v-2zm13-5 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10zm-1 2.885L15.753 16h2.492zM3 3h6a3 3 0 0 1 2.235 5A3 3 0 0 1 9 13H3zm6 6H5v2h4a1 1 0 1 0 0-2m8-6a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3zM9 5H5v2h4a1 1 0 0 0 0-2" />
    </Svg>
  )
})
/**
 * Remix Icon: A B
 * @see {@link https://remixicon.com/icon/a-b Remix Icon Docs}
 */
export { AB }
