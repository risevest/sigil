import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Building2Fill = /* @__PURE__ */ memo(function Building2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.423a.5.5 0 0 1 .703.456z" />
    </Svg>
  )
})
/**
 * Remix Icon: Building 2 Fill
 * @see {@link https://remixicon.com/icon/building-2-fill Remix Icon Docs}
 */
export { Building2Fill }
