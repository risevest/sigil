import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m5 18 6-6-6-6zM19 6l-6 6 6 6z" />
    </Svg>
  )
})
Icon.displayName = 'ContractLeftRightFill'
/**
 * Remix Icon: Contract Left Right Fill
 * @see {@link https://remixicon.com/icon/contract-left-right-fill Remix Icon Docs}
 */
export const ContractLeftRightFill = Icon
