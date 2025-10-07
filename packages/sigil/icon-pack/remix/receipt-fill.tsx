import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 4 6 2 3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2H7v2a1 1 0 1 1-2 0v-4h16V4l-3-2-3 2-3-2z" />
    </Svg>
  )
})
Icon.displayName = 'ReceiptFill'
/**
 * Remix Icon: Receipt Fill
 * @see {@link https://remixicon.com/icon/receipt-fill Remix Icon Docs}
 */
export const ReceiptFill = Icon
