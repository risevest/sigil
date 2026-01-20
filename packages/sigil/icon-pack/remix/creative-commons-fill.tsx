import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CreativeCommonsFill = /* @__PURE__ */ memo(function CreativeCommonsFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9 8c-2.208 0-4 1.792-4 4a4.001 4.001 0 0 0 6.828 2.828l-1.414-1.414a2 2 0 1 1 0-2.828l1.415-1.413A4 4 0 0 0 9 8m7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 0 0 6.828 2.828l-1.414-1.414a2 2 0 1 1 0-2.828l1.415-1.413A4 4 0 0 0 16 8" />
    </Svg>
  )
})
/**
 * Remix Icon: Creative Commons Fill
 * @see {@link https://remixicon.com/icon/creative-commons-fill Remix Icon Docs}
 */
export { CreativeCommonsFill }
