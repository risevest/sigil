import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SdCardFill = /* @__PURE__ */ memo(function SdCardFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.293 6.707 9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5v4h2V5zm-3 0v4h2V5zM9 5v4h2V5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sd Card Fill
 * @see {@link https://remixicon.com/icon/sd-card-fill Remix Icon Docs}
 */
export { SdCardFill }
