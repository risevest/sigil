import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SpamLine = /* @__PURE__ */ memo(function SpamLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5zM11 15h2v2h-2zm0-8h2v6h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Spam Line
 * @see {@link https://remixicon.com/icon/spam-line Remix Icon Docs}
 */
export { SpamLine }
