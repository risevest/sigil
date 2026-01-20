import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightUpFill = /* @__PURE__ */ memo(function ArrowRightUpFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.05 12.361-5.656 5.657-1.414-1.414 5.657-5.657-4.95-4.95H18v11.314z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Up Fill
 * @see {@link https://remixicon.com/icon/arrow-right-up-fill Remix Icon Docs}
 */
export { ArrowRightUpFill }
