import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RecordMailLine = /* @__PURE__ */ memo(function RecordMailLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.257 15a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2zM5.5 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
    </Svg>
  )
})
/**
 * Remix Icon: Record Mail Line
 * @see {@link https://remixicon.com/icon/record-mail-line Remix Icon Docs}
 */
export { RecordMailLine }
