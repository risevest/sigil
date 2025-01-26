import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1 22C1 17.5817 4.58172 14 9 14C13.4183 14 17 17.5817 17 22H15C15 18.6863 12.3137 16 9 16C5.68629 16 3 18.6863 3 22H1ZM9 13C5.685 13 3 10.315 3 7.00002C3 3.68502 5.685 1.00002 9 1.00002C12.315 1.00002 15 3.68502 15 7.00002C15 10.315 12.315 13 9 13ZM9 11C11.21 11 13 9.21002 13 7.00002C13 4.79002 11.21 3.00002 9 3.00002C6.79 3.00002 5 4.79002 5 7.00002C5 9.21002 6.79 11 9 11ZM21.5476 0.783569C22.4773 2.65651 23 4.76723 23 7.00002C23 9.23281 22.4773 11.3435 21.5476 13.2165L19.9027 12.0201C20.6071 10.4928 21 8.79231 21 7.00002C21 5.20772 20.6071 3.5072 19.9027 1.9799L21.5476 0.783569ZM18.2463 3.18451C18.732 4.36026 19 5.64884 19 7.00002C19 8.35119 18.732 9.63977 18.2463 10.8155L16.5694 9.59595C16.8485 8.78194 17 7.90867 17 7.00002C17 6.09136 16.8485 5.21809 16.5694 4.40408L18.2463 3.18451Z" />
    </Svg>
  )
}

Icon.displayName = 'UserVoiceLine'

/**
 * Remix Icon: User Voice Line
 * @see {@link https://remixicon.com/icon/user-voice-line Remix Icon Docs}
 */
export const UserVoiceLine = memo(Icon)
