import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 7V17.88L22.85 19.73C22.94 19.5 23 19.26 23 19V7C23 5.89 22.11 5 21 5H13.42L16.71 1.7L16 1L12 5L8 1L7.3 1.7L10.58 5H8.12L10.12 7H21ZM20.46 23L21.72 21.73L20.46 22.99V23ZM2.41 2.13L1 3.54L2.53 5.07C1.65 5.28 1 6.06 1 7V19C1 20.1 1.9 21 3 21H18.46L20.45 22.99L21.86 21.58L2.41 2.13ZM3 19V7H4.46L16.46 19H3Z" />
    </Svg>
  )
}

Icon.displayName = 'TvOff'

/**
 * Material Icon: Tv Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tv_off Material Icon Docs}
 */
export const TvOff = memo(Icon)
