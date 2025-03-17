import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 7L9.5 12L14.5 17V7Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeft'

/**
 * Material Icon: Arrow Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_left Material Icon Docs}
 */
export const ArrowLeft = memo(Icon)
