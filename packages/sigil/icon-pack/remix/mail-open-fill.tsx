import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.243 6.854 11.49 1.31a1 1 0 0 1 1.028 0l9.24 5.545a.5.5 0 0 1 .242.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429m16.103 1.39-6.285 5.439-6.414-5.445-1.294 1.524 7.72 6.555 7.581-6.56z" />
    </Svg>
  )
})
Icon.displayName = 'MailOpenFill'
/**
 * Remix Icon: Mail Open Fill
 * @see {@link https://remixicon.com/icon/mail-open-fill Remix Icon Docs}
 */
export const MailOpenFill = Icon
