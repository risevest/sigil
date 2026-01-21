import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightBoxFill = /* @__PURE__ */ memo(function ArrowRightBoxFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm13.657 9-5.95 5.95V13H6.345v-2h5.364V6.05z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Box Fill
 * @see {@link https://remixicon.com/icon/arrow-right-box-fill Remix Icon Docs}
 */
export { ArrowRightBoxFill }
