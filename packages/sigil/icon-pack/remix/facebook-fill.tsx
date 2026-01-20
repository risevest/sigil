import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FacebookFill = /* @__PURE__ */ memo(function FacebookFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Facebook Fill
 * @see {@link https://remixicon.com/icon/facebook-fill Remix Icon Docs}
 */
export { FacebookFill }
