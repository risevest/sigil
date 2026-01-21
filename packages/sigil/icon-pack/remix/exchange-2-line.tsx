import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Exchange2Line = /* @__PURE__ */ memo(function Exchange2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 21.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m-10 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m10-10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M3 8a5 5 0 0 1 5-5h3v2H8a3 3 0 0 0-3 3v3H3zm18 5h-2v3a3 3 0 0 1-3 3h-3v2h3a5 5 0 0 0 5-5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Exchange 2 Line
 * @see {@link https://remixicon.com/icon/exchange-2-line Remix Icon Docs}
 */
export { Exchange2Line }
