import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftRightFill = /* @__PURE__ */ memo(function ArrowLeftRightFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 16v-4l5 5-5 5v-4H4v-2zM8 2v3.999L20 6v2H8v4L3 7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Right Fill
 * @see {@link https://remixicon.com/icon/arrow-left-right-fill Remix Icon Docs}
 */
export { ArrowLeftRightFill }
