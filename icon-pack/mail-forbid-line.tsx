import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 7.23792L12.0718 14.338L4 7.21594V19H11.0709C11.1719 19.7061 11.3783 20.3783 11.6736 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12.2547C21.396 11.8334 20.7224 11.5049 20 11.2899V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM16.7066 20.7076C17.0982 20.895 17.5369 21 18 21C19.6569 21 21 19.6569 21 18C21 17.5369 20.895 17.0982 20.7076 16.7066L16.7066 20.7076ZM15.2924 19.2934L19.2934 15.2924C18.9018 15.105 18.4631 15 18 15C16.3431 15 15 16.3431 15 18C15 18.4631 15.105 18.9018 15.2924 19.2934ZM18 23C15.2386 23 13 20.7614 13 18C13 15.2386 15.2386 13 18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23Z" />
    </Svg>
  )
}

Icon.displayName = 'MailForbidLine'

/**
 * Remix Icon: Mail Forbid Line
 * @see {@link https://remixicon.com/icon/mail-forbid-line Remix Icon Docs}
 */
export const MailForbidLine = memo(Icon)
