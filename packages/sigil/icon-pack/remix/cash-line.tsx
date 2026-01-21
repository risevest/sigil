import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CashLine = /* @__PURE__ */ memo(function CashLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m9.005-11.997h-18a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1m-17 11.643V8.354a3.51 3.51 0 0 0 2.35-2.351h11.291a3.51 3.51 0 0 0 2.359 2.353v7.288a3.51 3.51 0 0 0-2.36 2.359H6.355a3.51 3.51 0 0 0-2.351-2.357" />
    </Svg>
  )
})
/**
 * Remix Icon: Cash Line
 * @see {@link https://remixicon.com/icon/cash-line Remix Icon Docs}
 */
export { CashLine }
