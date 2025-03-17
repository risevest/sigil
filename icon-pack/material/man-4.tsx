import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.75 7H10.25C9.04002 7 8.11002 8.07 8.27002 9.26L10 22H14L15.73 9.26C15.89 8.07 14.96 7 13.75 7Z" />
      <Path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8955 2 10 2.89543 10 4C10 5.10457 10.8955 6 12 6Z" />
    </Svg>
  )
}

Icon.displayName = 'Man4'

/**
 * Material Icon: Man 4
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:man_4 Material Icon Docs}
 */
export const Man4 = memo(Icon)
