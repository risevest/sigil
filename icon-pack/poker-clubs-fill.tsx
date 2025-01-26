import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.7748 11.0393C14.933 9.26656 16 7.63328 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 7.63328 9.06704 9.26656 10.2252 11.0393L10.226 11.0405C10.3036 11.1593 10.3816 11.2787 10.4597 11.3988C10.1704 11.179 9.90318 10.9699 9.65213 10.7734C8.27615 9.69663 7.38594 9 6 9C3.79086 9 2 10.7909 2 13C2 15.2091 3.79086 17 6 17C7.63328 17 9.26656 15.933 11.0393 14.7748L11.0701 14.7547C10.9774 17.0361 10.1119 18.4381 9.15685 19.9853L9.15684 19.9853L9.15683 19.9853C9.03494 20.1828 8.91159 20.3826 8.7882 20.5869C8.4039 21.2232 8.87465 22 9.61803 22H14.382C15.1253 22 15.5961 21.2232 15.2118 20.5869C15.0884 20.3826 14.9651 20.1828 14.8432 19.9853L14.8432 19.9853L14.8432 19.9853C13.8881 18.4381 13.0226 17.0361 12.9299 14.7547C12.9402 14.7614 12.9505 14.7681 12.9607 14.7748C14.7334 15.933 16.3667 17 18 17C20.2091 17 22 15.2091 22 13C22 10.7909 20.2091 9 18 9C16.6141 9 15.7238 9.69663 14.3479 10.7734C14.0968 10.9699 13.8296 11.179 13.5403 11.3988C13.6187 11.2783 13.697 11.1585 13.7748 11.0393Z" />
    </Svg>
  )
}

Icon.displayName = 'PokerClubsFill'

/**
 * Remix Icon: Poker Clubs Fill
 * @see {@link https://remixicon.com/icon/poker-clubs-fill Remix Icon Docs}
 */
export const PokerClubsFill = memo(Icon)
