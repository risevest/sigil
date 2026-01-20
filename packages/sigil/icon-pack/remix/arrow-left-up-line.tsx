import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftUpLine = /* @__PURE__ */ memo(function ArrowLeftUpLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9.414 8 8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Up Line
 * @see {@link https://remixicon.com/icon/arrow-left-up-line Remix Icon Docs}
 */
export { ArrowLeftUpLine }
