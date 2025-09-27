import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.071 4.929 1.414 1.414L11.83 11H21v2H11.83l4.656 4.657-1.414 1.414L8.001 12zm-11.07 14.07V5h2v14z" />
    </Svg>
  )
})
Icon.displayName = 'ContractLeftLine'
/**
 * Remix Icon: Contract Left Line
 * @see {@link https://remixicon.com/icon/contract-left-line Remix Icon Docs}
 */
export const ContractLeftLine = Icon
