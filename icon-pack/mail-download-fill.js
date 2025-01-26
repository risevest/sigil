import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 12.8027C21.1175 12.2922 20.0929 12 19 12C15.6863 12 13 14.6863 13 18C13 19.0929 13.2922 20.1175 13.8027 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12.8027ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM20 18H23L19 22L15 18H18V14H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'MailDownloadFill'

/**
 * Remix Icon: Mail Download Fill
 * @see {@link https://remixicon.com/icon/mail-download-fill Remix Icon Docs}
 */
export const MailDownloadFill = memo(Icon)
