import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TextDirectionR = /* @__PURE__ */ memo(function TextDirectionR(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zM7 17h12v2H7v2.5L3 18l4-3.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Text Direction R
 * @see {@link https://remixicon.com/icon/text-direction-r Remix Icon Docs}
 */
export { TextDirectionR }
