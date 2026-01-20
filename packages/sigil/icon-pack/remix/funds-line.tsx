import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FundsLine = /* @__PURE__ */ memo(function FundsLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.41 14.526 3.402-3.402 2.829 2.829 3.157-3.157-1.793-1.793h5v5l-1.793-1.793-4.571 4.571-2.829-2.828-2.474 2.474a8 8 0 1 0-.927-1.9m-1.537 1.558-.01-.01.004-.004a10 10 0 0 1-.862-4.067c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919" />
    </Svg>
  )
})
/**
 * Remix Icon: Funds Line
 * @see {@link https://remixicon.com/icon/funds-line Remix Icon Docs}
 */
export { FundsLine }
