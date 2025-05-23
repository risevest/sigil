import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.105 17.5C18.635 17.5 14.535 16.17 12.425 12.07C10.095 7.56 11.925 3.59 12.955 2C7.59495 2.19 3.30495 6.58 3.30495 11.99C3.30495 12.13 3.32495 12.27 3.32495 12.41C3.93495 12.15 4.60495 11.99 5.30495 11.99C5.30495 8.9 7.03495 6.22 9.60495 4.89C9.10495 7.08 9.06495 9.93 10.645 12.99C12.215 16.03 14.825 17.94 17.445 18.85C16.215 19.59 14.795 20 13.315 20C12.815 20 12.315 19.95 11.835 19.86C11.465 20.56 10.895 21.13 10.195 21.5C11.175 21.82 12.225 22 13.305 22C16.805 22 19.885 20.2 21.675 17.48C21.505 17.49 21.305 17.5 21.105 17.5Z" />
      <Path d="M8.32495 15.99H8.14495C7.72495 14.83 6.62495 13.99 5.32495 13.99C3.66495 13.99 2.32495 15.33 2.32495 16.99C2.32495 18.65 3.66495 19.99 5.32495 19.99H8.32495C9.42495 19.99 10.325 19.09 10.325 17.99C10.325 16.89 9.42495 15.99 8.32495 15.99Z" />
    </Svg>
  )
}

Icon.displayName = 'NightsStay'

/**
 * Material Icon: Nights Stay
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nights_stay Material Icon Docs}
 */
export const NightsStay = memo(Icon)
