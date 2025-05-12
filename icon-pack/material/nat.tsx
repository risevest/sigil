import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M6.82 13H11V11H6.82C6.4 9.84 5.3 9 4 9C2.34 9 1 10.34 1 12C1 13.66 2.34 15 4 15C5.3 15 6.4 14.16 6.82 13ZM4 13C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11C4.55 11 5 11.45 5 12C5 12.55 4.55 13 4 13Z"
        fill={color}
      />
      <Path
        d="M23 12L19 9V11H14.95C14.45 5.95 10.19 2 5 2V4C9.42 4 13 7.58 13 12C13 16.42 9.42 20 5 20V22C10.19 22 14.45 18.05 14.95 13H19V15L23 12Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Nat'

/**
 * Material Icon: Nat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nat Material Icon Docs}
 */
export const Nat = memo(Icon)
