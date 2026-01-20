import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NumbersLine = /* @__PURE__ */ memo(function NumbersLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 18H4v-8h5zm-2-2v-4H6v4zm6 0V8h-1v8zm2 2h-5V6h5zm4-2V4h-1v12zm2 2h-5V2h5zm1 4H3v-2h19z" />
    </Svg>
  )
})
/**
 * Remix Icon: Numbers Line
 * @see {@link https://remixicon.com/icon/numbers-line Remix Icon Docs}
 */
export { NumbersLine }
