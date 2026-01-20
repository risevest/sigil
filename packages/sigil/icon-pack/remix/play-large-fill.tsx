import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlayLargeFill = /* @__PURE__ */ memo(function PlayLargeFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 20.196V3.804a1 1 0 0 1 1.53-.848l13.113 8.196a1 1 0 0 1 0 1.696L7.53 21.044A1 1 0 0 1 6 20.196" />
    </Svg>
  )
})
/**
 * Remix Icon: Play Large Fill
 * @see {@link https://remixicon.com/icon/play-large-fill Remix Icon Docs}
 */
export { PlayLargeFill }
