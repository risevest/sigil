import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 6H8V18H6V6ZM9.5 12L18 18V6L9.5 12ZM16 14.14L12.97 12L16 9.86V14.14Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipPrevious'

/**
 * Material Icon: Skip Previous
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:skip_previous Material Icon Docs}
 */
export const SkipPrevious = memo(Icon)
