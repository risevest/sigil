import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17.59 5L5 17.59V5H17.59ZM6.41 19L19 6.41V19H6.41ZM6 7H11V8.5H6V7ZM16 12.5H14.5V14.5H12.5V16H14.5V18H16V16H18V14.5H16V12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Exposure'

/**
 * Material Icon: Exposure
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:exposure Material Icon Docs}
 */
export const Exposure = memo(Icon)
