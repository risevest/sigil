import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InfoCardFill = /* @__PURE__ */ memo(function InfoCardFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 3H7v2h2zm-2 5v3h2v-5H6v2zm6-4v2h6V9zm5 4h-5v2h5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Info Card Fill
 * @see {@link https://remixicon.com/icon/info-card-fill Remix Icon Docs}
 */
export { InfoCardFill }
