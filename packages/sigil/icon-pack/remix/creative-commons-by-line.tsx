import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CreativeCommonsByLine = /* @__PURE__ */ memo(function CreativeCommonsByLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4h1.5v4h3v-4H15zm-3-9C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Creative Commons By Line
 * @see {@link https://remixicon.com/icon/creative-commons-by-line Remix Icon Docs}
 */
export { CreativeCommonsByLine }
