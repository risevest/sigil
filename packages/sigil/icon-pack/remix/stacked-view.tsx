import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StackedView = /* @__PURE__ */ memo(function StackedView(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 11V4h14v9zm-1 4a1 1 0 0 0-1 1v4h2v-3h14v3h2v-4a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Stacked View
 * @see {@link https://remixicon.com/icon/stacked-view Remix Icon Docs}
 */
export { StackedView }
