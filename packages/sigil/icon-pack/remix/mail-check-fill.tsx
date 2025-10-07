import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513zM19 22l-3.536-3.535 1.415-1.415L19 19.172l3.535-3.536 1.415 1.414z" />
    </Svg>
  )
})
Icon.displayName = 'MailCheckFill'
/**
 * Remix Icon: Mail Check Fill
 * @see {@link https://remixicon.com/icon/mail-check-fill Remix Icon Docs}
 */
export const MailCheckFill = Icon
