import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 14.5V23.5L16.667 21H14V17H16.667L20 14.5ZM21 3C21.5523 3 22 3.44772 22 4L22.0009 14.5286C20.9393 13.578 19.5371 13 18 13C14.6863 13 12 15.6863 12 19C12 19.7015 12.1204 20.3749 12.3417 21.0007L3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM21 17C22.1046 17 23 17.8954 23 19C23 20.0544 22.1841 20.9182 21.1493 20.9945L21 21V17ZM5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.06 11.682L5.64722 6.2377Z" />
    </Svg>
  )
}

Icon.displayName = 'MailVolumeFill'

/**
 * Remix Icon: Mail Volume Fill
 * @see {@link https://remixicon.com/icon/mail-volume-fill Remix Icon Docs}
 */
export const MailVolumeFill = memo(Icon)
