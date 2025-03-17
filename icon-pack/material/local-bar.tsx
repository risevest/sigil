import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.77 9L12 12.11L9.23 9H14.77ZM21 3H3V5L11 14V19H6V21H18V19H13V14L21 5V3ZM7.43 7L5.66 5H18.35L16.57 7H7.43Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalBar'

/**
 * Material Icon: Local Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_bar Material Icon Docs}
 */
export const LocalBar = memo(Icon)
