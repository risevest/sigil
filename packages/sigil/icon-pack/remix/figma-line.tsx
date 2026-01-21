import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FigmaLine = /* @__PURE__ */ memo(function FigmaLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3A4 4 0 0 1 5 12a4 4 0 0 1 1.354-3A4 4 0 0 1 5 6m6 4H9a2 2 0 1 0 0 4h2zm2 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-4a2 2 0 1 0 0-4h-2v4zM9 4a2 2 0 1 0 0 4h2V4zm2 12H9a2 2 0 1 0 2 2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Figma Line
 * @see {@link https://remixicon.com/icon/figma-line Remix Icon Docs}
 */
export { FigmaLine }
