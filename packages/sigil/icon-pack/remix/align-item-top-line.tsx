import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignItemTopLine = /* @__PURE__ */ memo(function AlignItemTopLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3H3v2h18zm-6 6v6h3V9zm-2-1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zM9 9v10H6V9zM5 7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Align Item Top Line
 * @see {@link https://remixicon.com/icon/align-item-top-line Remix Icon Docs}
 */
export { AlignItemTopLine }
