import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftWideLine = /* @__PURE__ */ memo(function ArrowLeftWideLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m8.369 12 4.747-8.968 1.768.936L10.632 12l4.252 8.032-1.768.936z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Wide Line
 * @see {@link https://remixicon.com/icon/arrow-left-wide-line Remix Icon Docs}
 */
export { ArrowLeftWideLine }
