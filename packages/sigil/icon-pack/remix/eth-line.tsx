import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.149 15.304 12 20.6l3.851-5.296L12 17.674zm8.988-3.14L12 3.816l-5.137 8.348L12 15.326zM4 13l8-13 8 13-8 11z" />
    </Svg>
  )
})
Icon.displayName = 'EthLine'
/**
 * Remix Icon: Eth Line
 * @see {@link https://remixicon.com/icon/eth-line Remix Icon Docs}
 */
export const EthLine = Icon
