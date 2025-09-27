import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm10 5h3v9h-3v3h-2v-3h-3v-9h3v-3h2z" />
    </Svg>
  )
})
Icon.displayName = 'StockFill'
/**
 * Remix Icon: Stock Fill
 * @see {@link https://remixicon.com/icon/stock-fill Remix Icon Docs}
 */
export const StockFill = Icon
