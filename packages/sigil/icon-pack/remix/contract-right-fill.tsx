import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9 5 7 7-7 7v-6H3v-2h6zm9 14V5h2v14z" />
    </Svg>
  )
})
Icon.displayName = 'ContractRightFill'
/**
 * Remix Icon: Contract Right Fill
 * @see {@link https://remixicon.com/icon/contract-right-fill Remix Icon Docs}
 */
export const ContractRightFill = Icon
