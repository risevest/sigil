import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftLongFill = /* @__PURE__ */ memo(function ArrowLeftLongFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 13v-2H8.414V5.586L2 12l6.414 6.414V13z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Long Fill
 * @see {@link https://remixicon.com/icon/arrow-left-long-fill Remix Icon Docs}
 */
export { ArrowLeftLongFill }
