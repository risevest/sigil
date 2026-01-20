import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GovernmentFill = /* @__PURE__ */ memo(function GovernmentFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 19V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3v2h-1v11h1v2H1v-2zm11 0v-7h-2v7zm-5 0v-7H6v7zm10 0v-7h-2v7zM6 5v1h12V5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Government Fill
 * @see {@link https://remixicon.com/icon/government-fill Remix Icon Docs}
 */
export { GovernmentFill }
