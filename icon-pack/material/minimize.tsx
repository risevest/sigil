import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 11H18V13H6V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Minimize'

/**
 * Material Icon: Minimize
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:minimize Material Icon Docs}
 */
export const Minimize = memo(Icon)
