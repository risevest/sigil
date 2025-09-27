import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M8 9v2h8V9zm0 4v2h8v-2z" />
    </Svg>
  )
})
Icon.displayName = 'BillFill'
/**
 * Remix Icon: Bill Fill
 * @see {@link https://remixicon.com/icon/bill-fill Remix Icon Docs}
 */
export const BillFill = Icon
