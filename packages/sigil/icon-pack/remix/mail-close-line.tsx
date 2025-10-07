import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h11v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zm16.903 14 2.121 2.121-1.414 1.415L20 20.414l-2.121 2.121-1.415-1.414L18.587 19l-2.121-2.121 1.414-1.415L20 17.587l2.121-2.121 1.415 1.414z" />
    </Svg>
  )
})
Icon.displayName = 'MailCloseLine'
/**
 * Remix Icon: Mail Close Line
 * @see {@link https://remixicon.com/icon/mail-close-line Remix Icon Docs}
 */
export const MailCloseLine = Icon
