import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PatreonFill = /* @__PURE__ */ memo(function PatreonFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.001 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m-13-15h4v20h-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Patreon Fill
 * @see {@link https://remixicon.com/icon/patreon-fill Remix Icon Docs}
 */
export { PatreonFill }
