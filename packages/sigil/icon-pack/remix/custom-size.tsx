import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CustomSize = /* @__PURE__ */ memo(function CustomSize(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 3h7V.5L18.5 4 15 7.5V5H8v2.5L4.5 4 8 .5zM3 17V6.5h2V17a2 2 0 0 0 2 2h10.5v2H7a4 4 0 0 1-4-4m18-1V9h2.5L20 5.5 16.5 9H19v7h-2.5l3.5 3.5 3.5-3.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Custom Size
 * @see {@link https://remixicon.com/icon/custom-size Remix Icon Docs}
 */
export { CustomSize }
