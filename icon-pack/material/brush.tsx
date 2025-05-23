import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.49878 16C8.04878 16 8.49878 16.45 8.49878 17C8.49878 18.1 7.59878 19 6.49878 19C6.32878 19 6.16878 18.98 5.99878 18.95C6.30878 18.4 6.49878 17.74 6.49878 17C6.49878 16.45 6.94878 16 7.49878 16ZM19.1688 3C18.9088 3 18.6588 3.1 18.4588 3.29L9.49878 12.25L12.2488 15L21.2088 6.04C21.5988 5.65 21.5988 5.02 21.2088 4.63L19.8688 3.29C19.6688 3.09 19.4188 3 19.1688 3ZM7.49878 14C5.83878 14 4.49878 15.34 4.49878 17C4.49878 18.31 3.33878 19 2.49878 19C3.41878 20.22 4.98878 21 6.49878 21C8.70878 21 10.4988 19.21 10.4988 17C10.4988 15.34 9.15878 14 7.49878 14Z" />
    </Svg>
  )
}

Icon.displayName = 'Brush'

/**
 * Material Icon: Brush
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:brush Material Icon Docs}
 */
export const Brush = memo(Icon)
