import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m6.457 18.954 8.564-8.564-1.414-1.414-8.564 8.564zm5.735-11.392-1.414-1.414 1.414-1.415 1.768 1.768 2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.768 1.767-1.415 1.415-1.414-1.415-9.192 9.193H3v-4.243z" />
    </Svg>
  )
})
Icon.displayName = 'SipLine'
/**
 * Remix Icon: Sip Line
 * @see {@link https://remixicon.com/icon/sip-line Remix Icon Docs}
 */
export const SipLine = Icon
