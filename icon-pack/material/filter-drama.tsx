import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.61 5.64 5.36 8.04C2.35 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.79 3.79 10 6 10C8.21 10 10 11.79 10 14H12C12 11.24 10.14 8.92 7.6 8.22C8.61 6.88 10.2 6 12 6C15.03 6 17.5 8.47 17.5 11.5V12H19C20.65 12 22 13.35 22 15C22 16.65 20.65 18 19 18Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterDrama'

/**
 * Material Icon: Filter Drama
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_drama Material Icon Docs}
 */
export const FilterDrama = memo(Icon)
