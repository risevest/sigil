import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Compass3Fill = /* @__PURE__ */ memo(function Compass3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m4.5-14.5L10 10l-2.5 6.5L14 14zM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Compass 3 Fill
 * @see {@link https://remixicon.com/icon/compass-3-fill Remix Icon Docs}
 */
export { Compass3Fill }
