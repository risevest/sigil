import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AtFill = /* @__PURE__ */ memo(function AtFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m8-10a8 8 0 1 0-3.968 6.911l-1.008-1.728A6 6 0 1 1 18 12v1a1 1 0 1 1-2 0V9h-1.354a4 4 0 1 0 .066 5.94A3 3 0 0 0 20 13zm-8-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </Svg>
  )
})
/**
 * Remix Icon: At Fill
 * @see {@link https://remixicon.com/icon/at-fill Remix Icon Docs}
 */
export { AtFill }
