import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SkipRightFill = /* @__PURE__ */ memo(function SkipRightFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 6v12h-2V6zm-4 6-6 6V6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Skip Right Fill
 * @see {@link https://remixicon.com/icon/skip-right-fill Remix Icon Docs}
 */
export { SkipRightFill }
