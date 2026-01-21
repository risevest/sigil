import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GlobalFill = /* @__PURE__ */ memo(function GlobalFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881 17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881 10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592 15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408 15.9 15.9 0 0 1 14.47 11z" />
    </Svg>
  )
})
/**
 * Remix Icon: Global Fill
 * @see {@link https://remixicon.com/icon/global-fill Remix Icon Docs}
 */
export { GlobalFill }
