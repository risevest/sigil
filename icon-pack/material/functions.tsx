import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 4H6V6L12.5 12L6 18V20H18V17H11L16 12L11 7H18V4Z" />
    </Svg>
  )
}

Icon.displayName = 'Functions'

/**
 * Material Icon: Functions
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:functions Material Icon Docs}
 */
export const Functions = memo(Icon)
