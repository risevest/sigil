import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BilliardsFill = /* @__PURE__ */ memo(function BilliardsFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 1.75a2.5 2.5 0 0 1 1.88 4.148c.565.456.92 1.117.92 1.852 0 1.38-1.254 2.5-2.8 2.5s-2.8-1.12-2.8-2.5c0-.735.355-1.396.92-1.853A2.5 2.5 0 0 1 12 7.75m0 5c-.754 0-1.3.488-1.3 1s.547 1 1.3 1c.754 0 1.3-.488 1.3-1s-.546-1-1.3-1m0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
/**
 * Remix Icon: Billiards Fill
 * @see {@link https://remixicon.com/icon/billiards-fill Remix Icon Docs}
 */
export { BilliardsFill }
