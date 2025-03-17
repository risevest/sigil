import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 10.78V8C21 6.35 19.65 5 18 5H14C13.23 5 12.53 5.3 12 5.78C11.47 5.3 10.77 5 10 5H6C4.35 5 3 6.35 3 8V10.78C2.39 11.33 2 12.12 2 13V19H4V17H20V19H22V13C22 12.12 21.61 11.33 21 10.78ZM14 7H18C18.55 7 19 7.45 19 8V10H13V8C13 7.45 13.45 7 14 7ZM5 8C5 7.45 5.45 7 6 7H10C10.55 7 11 7.45 11 8V10H5V8ZM4 15V13C4 12.45 4.45 12 5 12H19C19.55 12 20 12.45 20 13V15H4Z" />
    </Svg>
  )
}

Icon.displayName = 'Bed'

/**
 * Material Icon: Bed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bed Material Icon Docs}
 */
export const Bed = memo(Icon)
