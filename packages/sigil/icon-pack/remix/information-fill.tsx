import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InformationFill = /* @__PURE__ */ memo(function InformationFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-1-11v6h2v-6zm0-4v2h2V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Information Fill
 * @see {@link https://remixicon.com/icon/information-fill Remix Icon Docs}
 */
export { InformationFill }
