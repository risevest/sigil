import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftDownLine = /* @__PURE__ */ memo(function ArrowLeftDownLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9 13.589 8.607-8.607 1.414 1.415-8.607 8.606H18v2H7v-11h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Down Line
 * @see {@link https://remixicon.com/icon/arrow-left-down-line Remix Icon Docs}
 */
export { ArrowLeftDownLine }
