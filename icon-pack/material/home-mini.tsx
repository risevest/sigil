import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 5C4.19 5 2 9.48 2 12C2 15.86 5.13 19 8.99 19H15.01C17.7 19 22 16.92 22 12C22 12 22 5 12 5ZM12 7C19.64 7 19.99 11.51 20 12H4C4 11.8 4.09 7 12 7ZM14.86 17H9.14C7.04 17 5.22 15.76 4.43 14H19.58C18.78 15.76 16.96 17 14.86 17Z" />
    </Svg>
  )
}

Icon.displayName = 'HomeMini'

/**
 * Material Icon: Home Mini
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:home_mini Material Icon Docs}
 */
export const HomeMini = memo(Icon)
