import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LandscapeLine = /* @__PURE__ */ memo(function LandscapeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.27 12.216 15 6l8 15H2L9 8zm1.12 2.022L14.987 19h4.68l-4.77-8.942zM5.348 19h7.304L9 12.219zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" />
    </Svg>
  )
})
/**
 * Remix Icon: Landscape Line
 * @see {@link https://remixicon.com/icon/landscape-line Remix Icon Docs}
 */
export { LandscapeLine }
