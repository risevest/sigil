import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 5V19H20V5H4ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.5 11.25H9.5V9H11V15H9.5V12.75H7.5V15H6V9H7.5V11.25ZM14.5 10.5V13.5H16C16.2761 13.5 16.5 13.2761 16.5 13V11C16.5 10.7239 16.2761 10.5 16 10.5H14.5ZM13 9H16C17.1046 9 18 9.89543 18 11V13C18 14.1046 17.1046 15 16 15H13V9Z" />
    </Svg>
  )
}

Icon.displayName = 'HdLine'

/**
 * Remix Icon: Hd Line
 * @see {@link https://remixicon.com/icon/hd-line Remix Icon Docs}
 */
export const HdLine = memo(Icon)