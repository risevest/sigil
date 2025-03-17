import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6.5H16V4.5C16 3.39 15.11 2.5 14 2.5H10C8.89 2.5 8 3.39 8 4.5V6.5H4C2.89 6.5 2.01 7.39 2.01 8.5L2 19.5C2 20.61 2.89 21.5 4 21.5H20C21.11 21.5 22 20.61 22 19.5V8.5C22 7.39 21.11 6.5 20 6.5ZM14 6.5H10V4.5H14V6.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Work'

/**
 * Material Icon: Work
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:work Material Icon Docs}
 */
export const Work = memo(Icon)
