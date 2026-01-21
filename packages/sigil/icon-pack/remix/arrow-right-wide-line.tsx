import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightWideLine = /* @__PURE__ */ memo(function ArrowRightWideLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.632 12-4.748-8.968-1.768.936L13.368 12l-4.252 8.032 1.768.936z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Wide Line
 * @see {@link https://remixicon.com/icon/arrow-right-wide-line Remix Icon Docs}
 */
export { ArrowRightWideLine }
