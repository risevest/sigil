import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Html5Line = /* @__PURE__ */ memo(function Html5Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 18.178-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778zM3 2h18l-1.623 18L12 22l-7.377-2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Html5 Line
 * @see {@link https://remixicon.com/icon/html5-line Remix Icon Docs}
 */
export { Html5Line }
