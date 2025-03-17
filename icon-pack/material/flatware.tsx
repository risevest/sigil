import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 7.08C16 8.85 15.16 10.33 14 10.9V21H12V10.9C10.84 10.33 10 8.85 10 7.08C10.01 4.83 11.35 3 13 3C14.66 3 16 4.83 16 7.08ZM17 3V21H19V13H21V7C21 5.24 19.76 3 17 3ZM8.28 3C7.88 3 7.56 3.32 7.56 3.72V7H6.72V3.72C6.72 3.32 6.4 3 6 3C5.6 3 5.28 3.32 5.28 3.72V7H4.44V3.72C4.44 3.32 4.12 3 3.72 3C3.32 3 3 3.32 3 3.72V9C3 10.1 3.9 11 5 11V21H7V11C8.1 11 9 10.1 9 9V3.72C9 3.32 8.68 3 8.28 3Z" />
    </Svg>
  )
}

Icon.displayName = 'Flatware'

/**
 * Material Icon: Flatware
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flatware Material Icon Docs}
 */
export const Flatware = memo(Icon)
