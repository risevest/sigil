import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightBoxLine = /* @__PURE__ */ memo(function ArrowRightBoxLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm12.657-7L12 17.657l-1.414-1.414L13.828 13H6.343v-2h7.485l-3.242-3.243L12 6.343z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Box Line
 * @see {@link https://remixicon.com/icon/arrow-right-box-line Remix Icon Docs}
 */
export { ArrowRightBoxLine }
