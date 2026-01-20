import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftBoxFill = /* @__PURE__ */ memo(function ArrowLeftBoxFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm2.343 9 5.95-5.95V11h5.364v2h-5.364v4.95z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Box Fill
 * @see {@link https://remixicon.com/icon/arrow-left-box-fill Remix Icon Docs}
 */
export { ArrowLeftBoxFill }
