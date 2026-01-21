import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NextjsLine = /* @__PURE__ */ memo(function NextjsLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.664 17.65 10.26 8H8v8h2v-5.054l6.087 7.933a8 8 0 1 1 1.578-1.23M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m2-10V8h2v4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Nextjs Line
 * @see {@link https://remixicon.com/icon/nextjs-line Remix Icon Docs}
 */
export { NextjsLine }
