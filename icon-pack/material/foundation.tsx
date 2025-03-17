import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 12.5H22L12 3.5L2 12.5H5V15.5H3V17.5H5V20.5H7V17.5H11V20.5H13V17.5H17V20.5H19V17.5H21V15.5H19V12.5ZM7 15.5V10.69L11 7.09V15.5H7ZM13 15.5V7.09L17 10.69V15.5H13Z" />
    </Svg>
  )
}

Icon.displayName = 'Foundation'

/**
 * Material Icon: Foundation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:foundation Material Icon Docs}
 */
export const Foundation = memo(Icon)
