import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.94 8.31C13.62 7.52 12.85 7 12 7C11.15 7 10.38 7.52 10.06 8.31L7 16H10.5V22H13.5V16H17L13.94 8.31Z" />
      <Path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" />
    </Svg>
  )
}

Icon.displayName = 'Woman2'

/**
 * Material Icon: Woman 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:woman_2 Material Icon Docs}
 */
export const Woman2 = memo(Icon)
