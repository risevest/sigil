import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.96 6.501 2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.768 1.767-1.415 1.415-7.07-7.071 1.413-1.415zm-3.182 2.475 4.243 4.243-7.778 7.778H3v-4.243z" />
    </Svg>
  )
})
Icon.displayName = 'SipFill'
/**
 * Remix Icon: Sip Fill
 * @see {@link https://remixicon.com/icon/sip-fill Remix Icon Docs}
 */
export const SipFill = Icon
