import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18 5-6 6-6-6zm0 14-6-6-6 6z" />
    </Svg>
  )
})
Icon.displayName = 'ContractUpDownFill'
/**
 * Remix Icon: Contract Up Down Fill
 * @see {@link https://remixicon.com/icon/contract-up-down-fill Remix Icon Docs}
 */
export const ContractUpDownFill = Icon
