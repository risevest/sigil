import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Flag2Fill = /* @__PURE__ */ memo(function Flag2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 3h19.138a.5.5 0 0 1 .434.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4v5H2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flag 2 Fill
 * @see {@link https://remixicon.com/icon/flag-2-fill Remix Icon Docs}
 */
export { Flag2Fill }
