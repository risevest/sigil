import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const H6 = /* @__PURE__ */ memo(function H6(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </Svg>
  )
})
/**
 * Remix Icon: H 6
 * @see {@link https://remixicon.com/icon/h-6 Remix Icon Docs}
 */
export { H6 }
