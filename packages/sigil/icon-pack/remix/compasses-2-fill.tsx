import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Compasses2Fill = /* @__PURE__ */ memo(function Compasses2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.33 13.497a6.99 6.99 0 0 0 2.67-5.5h2a8.99 8.99 0 0 1-3.661 7.246l2.527 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108a9 9 0 0 1-3.607.752 9 9 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.064-8.77A4.002 4.002 0 0 1 11 4.123V1.997h2v2.126a4.002 4.002 0 0 1 1.803 6.728zM14.6 14.498l-1.528-2.646a4 4 0 0 1-2.142 0l-1.528 2.646c.804.322 1.68.499 2.599.499a7 7 0 0 0 2.599-.499M12 8.997a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Compasses 2 Fill
 * @see {@link https://remixicon.com/icon/compasses-2-fill Remix Icon Docs}
 */
export { Compasses2Fill }
