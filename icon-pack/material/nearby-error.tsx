import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0025 7.57207L16.4225 11.9921L12.0025 16.4121L7.5825 11.9921L12.0025 7.57207ZM12.0025 19.1921L4.8025 11.9921L12.0025 4.79207L18.0025 10.7921V7.16207L13.4225 2.58207C12.6425 1.80207 11.3725 1.80207 10.5925 2.58207L2.5825 10.5821C1.8025 11.3621 1.8025 12.6321 2.5825 13.4121L10.5925 21.4121C11.3725 22.1921 12.6425 22.1921 13.4225 21.4121L18.0025 16.8221V13.1921L12.0025 19.1921ZM20.0025 20.0021H22.0025V22.0021H20.0025V20.0021ZM22.0025 10.0021H20.0025V18.0021H22.0025V10.0021Z" />
    </Svg>
  )
}

Icon.displayName = 'NearbyError'

/**
 * Material Icon: Nearby Error
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nearby_error Material Icon Docs}
 */
export const NearbyError = memo(Icon)
