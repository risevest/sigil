import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InstanceFill = /* @__PURE__ */ memo(function InstanceFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM6.499 9.97 11 12.578v5.048h2v-5.048l4.501-2.606-1.002-1.731L12 10.845 7.501 8.24z" />
    </Svg>
  )
})
/**
 * Remix Icon: Instance Fill
 * @see {@link https://remixicon.com/icon/instance-fill Remix Icon Docs}
 */
export { InstanceFill }
