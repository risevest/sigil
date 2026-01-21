import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SkipForwardLine = /* @__PURE__ */ memo(function SkipForwardLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 12.667 5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0zm-9-4.93v8.526L13.394 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Skip Forward Line
 * @see {@link https://remixicon.com/icon/skip-forward-line Remix Icon Docs}
 */
export { SkipForwardLine }
