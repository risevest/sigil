import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TabletFill = /* @__PURE__ */ memo(function TabletFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
/**
 * Remix Icon: Tablet Fill
 * @see {@link https://remixicon.com/icon/tablet-fill Remix Icon Docs}
 */
export { TabletFill }
