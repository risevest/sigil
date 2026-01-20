import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PatreonLine = /* @__PURE__ */ memo(function PatreonLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.001 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-13-13h5v20h-5zm2 2v16h1V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Patreon Line
 * @see {@link https://remixicon.com/icon/patreon-line Remix Icon Docs}
 */
export { PatreonLine }
