import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Mic2Fill = /* @__PURE__ */ memo(function Mic2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 1a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5M2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.392C20.896 18.545 16.852 22 12 22s-8.896-3.455-9.808-8.039" />
    </Svg>
  )
})
/**
 * Remix Icon: Mic 2 Fill
 * @see {@link https://remixicon.com/icon/mic-2-fill Remix Icon Docs}
 */
export { Mic2Fill }
