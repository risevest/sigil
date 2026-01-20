import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowUpDownLine = /* @__PURE__ */ memo(function ArrowUpDownLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m11.95 7.95-1.414 1.414L8 6.828 8 20H6V6.828L3.466 9.364 2.05 7.95 7 3zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Up Down Line
 * @see {@link https://remixicon.com/icon/arrow-up-down-line Remix Icon Docs}
 */
export { ArrowUpDownLine }
