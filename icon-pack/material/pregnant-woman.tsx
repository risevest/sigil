import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 4C9 2.89 9.89 2 11 2C12.11 2 13 2.89 13 4C13 5.11 12.11 6 11 6C9.89 6 9 5.11 9 4ZM16 13C15.99 11.66 15.17 10.49 14 10C14 8.34 12.66 7 11 7C9.34 7 8 8.34 8 10V17H10V22H13V17H16V13Z" />
    </Svg>
  )
}

Icon.displayName = 'PregnantWoman'

/**
 * Material Icon: Pregnant Woman
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pregnant_woman Material Icon Docs}
 */
export const PregnantWoman = memo(Icon)
