import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.793 5.207 12 11.414l6.207-6.207-1.414-1.414L12 8.586 7.207 3.793zm12.414 13.586L12 12.586l-6.207 6.207 1.414 1.414L12 15.414l4.793 4.793z" />
    </Svg>
  )
})
Icon.displayName = 'ContractUpDownLine'
/**
 * Remix Icon: Contract Up Down Line
 * @see {@link https://remixicon.com/icon/contract-up-down-line Remix Icon Docs}
 */
export const ContractUpDownLine = Icon
