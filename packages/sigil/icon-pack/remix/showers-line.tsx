import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShowersLine = /* @__PURE__ */ memo(function ShowersLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472zM7 16h2v4H7zm8 0h2v4h-2zm-4 3h2v4h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Showers Line
 * @see {@link https://remixicon.com/icon/showers-line Remix Icon Docs}
 */
export { ShowersLine }
