import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.172 11 7.515 6.343 8.929 4.93l7.07 7.07-7.07 7.072-1.414-1.414L12.17 13H3v-2zM18 19V5h2v14z" />
    </Svg>
  )
})
Icon.displayName = 'ContractRightLine'
/**
 * Remix Icon: Contract Right Line
 * @see {@link https://remixicon.com/icon/contract-right-line Remix Icon Docs}
 */
export const ContractRightLine = Icon
