import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2z" />
    </Svg>
  )
})
Icon.displayName = 'MailAddFill'
/**
 * Remix Icon: Mail Add Fill
 * @see {@link https://remixicon.com/icon/mail-add-fill Remix Icon Docs}
 */
export const MailAddFill = Icon
