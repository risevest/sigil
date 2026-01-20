import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CreativeCommonsNdLine = /* @__PURE__ */ memo(function CreativeCommonsNdLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 9h8v2H8zm0 6v-2h8v2zm-6-3C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />
    </Svg>
  )
})
/**
 * Remix Icon: Creative Commons Nd Line
 * @see {@link https://remixicon.com/icon/creative-commons-nd-line Remix Icon Docs}
 */
export { CreativeCommonsNdLine }
