import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1 5H3V19H1V5ZM5 5H7V19H5V5ZM22 5H10C9.45 5 9 5.45 9 6V18C9 18.55 9.45 19 10 19H22C22.55 19 23 18.55 23 18V6C23 5.45 22.55 5 22 5ZM21 17H11V7H21V17ZM17.43 12.62L15.43 15.19L14 13.47L12 15.99H20L17.43 12.62Z" />
    </Svg>
  )
}

Icon.displayName = 'BurstMode'

/**
 * Material Icon: Burst Mode
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:burst_mode Material Icon Docs}
 */
export const BurstMode = memo(Icon)
