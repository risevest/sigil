import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Contrast2Fill = /* @__PURE__ */ memo(function Contrast2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-6.671-5.575A8 8 0 1 0 16.425 5.325a9 9 0 0 1-2.304 8.793 9 9 0 0 1-8.792 2.304" />
    </Svg>
  )
})
/**
 * Remix Icon: Contrast 2 Fill
 * @see {@link https://remixicon.com/icon/contrast-2-fill Remix Icon Docs}
 */
export { Contrast2Fill }
