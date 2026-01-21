import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Forbid2Fill = /* @__PURE__ */ memo(function Forbid2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m4.891-13.477a6 6 0 0 0-1.414-1.414l-8.368 8.368a6 6 0 0 0 1.414 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Forbid 2 Fill
 * @see {@link https://remixicon.com/icon/forbid-2-fill Remix Icon Docs}
 */
export { Forbid2Fill }
