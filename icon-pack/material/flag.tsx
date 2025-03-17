import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.86 5.5L12.26 7.5H17.5V13.5H14.14L13.74 11.5H6.5V5.5H11.86ZM13.5 3.5H4.5V20.5H6.5V13.5H12.1L12.5 15.5H19.5V5.5H13.9L13.5 3.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Flag'

/**
 * Material Icon: Flag
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flag Material Icon Docs}
 */
export const Flag = memo(Icon)
