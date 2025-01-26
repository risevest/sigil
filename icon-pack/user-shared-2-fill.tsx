import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V13.5L23 18L18 22.5V19H15V17H18Z" />
    </Svg>
  )
}

Icon.displayName = 'UserShared2Fill'

/**
 * Remix Icon: User Shared 2 Fill
 * @see {@link https://remixicon.com/icon/user-shared-2-fill Remix Icon Docs}
 */
export const UserShared2Fill = memo(Icon)
