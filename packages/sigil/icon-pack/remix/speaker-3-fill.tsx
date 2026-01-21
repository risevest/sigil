import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Speaker3Fill = /* @__PURE__ */ memo(function Speaker3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12M6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Speaker 3 Fill
 * @see {@link https://remixicon.com/icon/speaker-3-fill Remix Icon Docs}
 */
export { Speaker3Fill }
