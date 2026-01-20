import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftDoubleFill = /* @__PURE__ */ memo(function ArrowLeftDoubleFill(
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
 * Remix Icon: Arrow Left Double Fill
 * @see {@link https://remixicon.com/icon/arrow-left-double-fill Remix Icon Docs}
 */
export { ArrowLeftDoubleFill }
