import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.79958 13.1285L10.6296 10.2985L3.60958 3.28853C2.04958 4.84853 2.04958 7.37853 3.60958 8.94853L7.79958 13.1285ZM14.5796 11.3185C16.1096 12.0285 18.2596 11.5285 19.8496 9.93853C21.7596 8.02853 22.1296 5.28853 20.6596 3.81853C19.1996 2.35853 16.4596 2.71853 14.5396 4.62853C12.9496 6.21853 12.4496 8.36853 13.1596 9.89853L3.39958 19.6585L4.80958 21.0685L11.6996 14.1985L18.5796 21.0785L19.9896 19.6685L13.1096 12.7885L14.5796 11.3185Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalDining'

/**
 * Material Icon: Local Dining
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_dining Material Icon Docs}
 */
export const LocalDining = memo(Icon)
