import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BlazeFill = /* @__PURE__ */ memo(function BlazeFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.5 9q1.5 1.59 1.5 4c0 3.466-3.7 4.276-5.5 9q-1-.862-1-2.5c0-3.482 5-5.29 5-10.5m-4-4q1.8 1.858 1.8 4c0 4.951-6.045 5.692-4.8 13Q9 20.26 9 17c0-3.325 5.5-6 5.5-12M10 1q2 2.5 2 4.5c0 6.25-8.5 8.222-4 16.5-2.616-.58-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1" />
    </Svg>
  )
})
/**
 * Remix Icon: Blaze Fill
 * @see {@link https://remixicon.com/icon/blaze-fill Remix Icon Docs}
 */
export { BlazeFill }
