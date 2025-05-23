import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 9V11H19V3H17V5H15V3H13V5H11V3H9V5H7V3H5V11H3V9H1V21H10V18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18V21H23V9H21ZM21 19H16V18C16 15.79 14.21 14 12 14C9.79 14 8 15.79 8 18V19H3V13H7V7H17V13H21V19Z" />
      <Path d="M11 9H9V12H11V9Z" />
      <Path d="M15 9H13V12H15V9Z" />
    </Svg>
  )
}

Icon.displayName = 'Castle'

/**
 * Material Icon: Castle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:castle Material Icon Docs}
 */
export const Castle = memo(Icon)
