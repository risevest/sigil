import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 15L17.59 13.59L13 18.17V2H11V18.17L6.41 13.58L5 15L12 22L19 15Z" />
    </Svg>
  )
}

Icon.displayName = 'South'

/**
 * Material Icon: South
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:south Material Icon Docs}
 */
export const South = memo(Icon)
