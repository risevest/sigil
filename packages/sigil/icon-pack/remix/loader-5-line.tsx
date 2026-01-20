import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Loader5Line = /* @__PURE__ */ memo(function Loader5Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Loader 5 Line
 * @see {@link https://remixicon.com/icon/loader-5-line Remix Icon Docs}
 */
export { Loader5Line }
