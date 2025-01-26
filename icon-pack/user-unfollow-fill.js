import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM19 16.5858L21.1213 14.4645L22.5355 15.8787L20.4142 18L22.5355 20.1213L21.1213 21.5355L19 19.4142L16.8787 21.5355L15.4645 20.1213L17.5858 18L15.4645 15.8787L16.8787 14.4645L19 16.5858Z" />
    </Svg>
  )
}

Icon.displayName = 'UserUnfollowFill'

/**
 * Remix Icon: User Unfollow Fill
 * @see {@link https://remixicon.com/icon/user-unfollow-fill Remix Icon Docs}
 */
export const UserUnfollowFill = memo(Icon)
