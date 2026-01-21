import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightCircleLine = /* @__PURE__ */ memo(function ArrowRightCircleLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 11V8l4 4-4 4v-3H8v-2zm0-9c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Circle Line
 * @see {@link https://remixicon.com/icon/arrow-right-circle-line Remix Icon Docs}
 */
export { ArrowRightCircleLine }
