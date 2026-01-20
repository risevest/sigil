import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Group3Fill = /* @__PURE__ */ memo(function Group3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M2 21v-4.5a4.5 4.5 0 1 1 9 0V21zm15.5-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8M13 21v-4.5a4.5 4.5 0 1 1 9 0V21z" />
    </Svg>
  )
})
/**
 * Remix Icon: Group 3 Fill
 * @see {@link https://remixicon.com/icon/group-3-fill Remix Icon Docs}
 */
export { Group3Fill }
