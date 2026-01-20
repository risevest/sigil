import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TentLine = /* @__PURE__ */ memo(function TentLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22.103 19 12.866 3a1 1 0 0 0-1.732 0L1.896 19H1v2h22v-2zM7.6 19H4.206L12 5.5 19.794 19H16.4L12 11zm4.4-3.85L14.117 19H9.884z" />
    </Svg>
  )
})
/**
 * Remix Icon: Tent Line
 * @see {@link https://remixicon.com/icon/tent-line Remix Icon Docs}
 */
export { TentLine }
