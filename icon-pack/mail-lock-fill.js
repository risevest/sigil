import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11.9996C21.1643 11.3719 20.1256 11 19 11C16.581 11 14.5633 12.7178 14.1 15H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V11.9996ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM22 17H23V22H15V17H16V16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16V17ZM20 17V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H20Z" />
    </Svg>
  )
}

Icon.displayName = 'MailLockFill'

/**
 * Remix Icon: Mail Lock Fill
 * @see {@link https://remixicon.com/icon/mail-lock-fill Remix Icon Docs}
 */
export const MailLockFill = memo(Icon)
