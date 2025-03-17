import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V8H3V5H21V19H14V21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM1 18V21H4C4 19.34 2.66 18 1 18ZM1 14V16C3.76 16 6 18.24 6 21H8C8 17.13 4.87 14 1 14ZM1 10V12C5.97 12 10 16.03 10 21H12C12 14.92 7.07 10 1 10ZM11 11.09V13.09L14.5 15L18 13.09V11.09L14.5 13L11 11.09ZM14.5 6L9 9L14.5 12L20 9L14.5 6Z" />
    </Svg>
  )
}

Icon.displayName = 'CastForEducation'

/**
 * Material Icon: Cast For Education
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cast_for_education Material Icon Docs}
 */
export const CastForEducation = memo(Icon)
