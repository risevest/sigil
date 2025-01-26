import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.99509 3C3.89262 3 3 3.89323 3 4.99509V19.0049C3 20.1074 3.89323 21 4.99509 21H19.0049C20.1074 21 21 20.1068 21 19.0049V4.99509C21 3.89262 20.1068 3 19.0049 3H4.99509ZM5 19V5H19V19H5ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14C14 15.8954 13.1046 15 12 15Z" />
    </Svg>
  )
}

Icon.displayName = 'AccountBox2Line'

/**
 * Remix Icon: Account Box 2 Line
 * @see {@link https://remixicon.com/icon/account-box-2-line Remix Icon Docs}
 */
export const AccountBox2Line = memo(Icon)