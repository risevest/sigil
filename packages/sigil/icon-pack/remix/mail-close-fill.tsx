import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513zM21.415 19l2.121 2.121-1.414 1.415L20 20.414l-2.121 2.121-1.415-1.414L18.587 19l-2.121-2.121 1.414-1.415L20 17.587l2.121-2.121 1.415 1.414z" />
    </Svg>
  )
})
Icon.displayName = 'MailCloseFill'
/**
 * Remix Icon: Mail Close Fill
 * @see {@link https://remixicon.com/icon/mail-close-fill Remix Icon Docs}
 */
export const MailCloseFill = Icon
