import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Asterisk = /* @__PURE__ */ memo(function Asterisk(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 3v7.267l6.294-3.633 1 1.732-6.293 3.633 6.293 3.635-1 1.732L13 13.732V21h-2v-7.268l-6.294 3.634-1-1.732L9.999 12 3.706 8.366l1-1.732L11 10.267V3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Asterisk
 * @see {@link https://remixicon.com/icon/asterisk Remix Icon Docs}
 */
export { Asterisk }
