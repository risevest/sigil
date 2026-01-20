import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenFill = /* @__PURE__ */ memo(function MenFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.586 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Men Fill
 * @see {@link https://remixicon.com/icon/men-fill Remix Icon Docs}
 */
export { MenFill }
