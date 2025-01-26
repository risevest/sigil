import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ShieldStarLine'

/**
 * Remix Icon: Shield Star Line
 * @see {@link https://remixicon.com/icon/shield-star-line Remix Icon Docs}
 */
export const ShieldStarLine = memo(Icon)
