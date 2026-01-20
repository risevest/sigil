import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DvdLine = /* @__PURE__ */ memo(function DvdLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m1-9h3l-5 7v-5H8l5-7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Dvd Line
 * @see {@link https://remixicon.com/icon/dvd-line Remix Icon Docs}
 */
export { DvdLine }
