import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 16L22 12L18 8V11H12.94C12.6 7.9 10.68 5.28 8 3.95C7.96 2.31 6.64 1 5 1C3.34 1 2 2.34 2 4C2 5.66 3.34 7 5 7C5.95 7 6.78 6.55 7.33 5.86C9.23 6.9 10.6 8.77 10.92 11H7.82C7.4 9.84 6.3 9 5 9C3.34 9 2 10.34 2 12C2 13.66 3.34 15 5 15C6.3 15 7.4 14.16 7.82 13H10.92C10.6 15.23 9.23 17.1 7.34 18.14C6.78 17.45 5.95 17 5 17C3.34 17 2 18.34 2 20C2 21.66 3.34 23 5 23C6.64 23 7.96 21.69 7.99 20.05C10.67 18.72 12.59 16.1 12.93 13H18V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Mediation'

/**
 * Material Icon: Mediation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mediation Material Icon Docs}
 */
export const Mediation = memo(Icon)
