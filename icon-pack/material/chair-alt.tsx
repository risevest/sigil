import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 10C18.1 10 19 9.1 19 8V5C19 3.9 18.1 3 17 3H7C5.9 3 5 3.9 5 5V8C5 9.1 5.9 10 7 10H8V12H7C5.9 12 5 12.9 5 14V21H7V18H17V21H19V14C19 12.9 18.1 12 17 12H16V10H17ZM7 8V5H17V8H7ZM17 16H7V14H17V16ZM14 12H10V10H14V12Z" />
    </Svg>
  )
}

Icon.displayName = 'ChairAlt'

/**
 * Material Icon: Chair Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:chair_alt Material Icon Docs}
 */
export const ChairAlt = memo(Icon)
