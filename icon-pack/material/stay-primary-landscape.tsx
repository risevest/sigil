import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M1.01 7L1 17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V7C23 5.9 22.1 5 21 5H3C1.9 5 1.01 5.9 1.01 7ZM19 7V17H5V7H19Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'StayPrimaryLandscape'

/**
 * Material Icon: Stay Primary Landscape
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stay_primary_landscape Material Icon Docs}
 */
export const StayPrimaryLandscape = memo(Icon)
