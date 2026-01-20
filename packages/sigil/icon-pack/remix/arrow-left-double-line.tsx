import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftDoubleLine = /* @__PURE__ */ memo(function ArrowLeftDoubleLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.836 12 6.207 6.207 1.414-1.414L7.664 12l4.793-4.793-1.414-1.414zm5.65 0 6.207 6.207 1.414-1.414L13.314 12l4.793-4.793-1.414-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Double Line
 * @see {@link https://remixicon.com/icon/arrow-left-double-line Remix Icon Docs}
 */
export { ArrowLeftDoubleLine }
