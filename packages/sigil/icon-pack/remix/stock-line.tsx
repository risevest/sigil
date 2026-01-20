import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StockLine = /* @__PURE__ */ memo(function StockLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5zm13 3h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Stock Line
 * @see {@link https://remixicon.com/icon/stock-line Remix Icon Docs}
 */
export { StockLine }
