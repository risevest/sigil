import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3L2 21H22L12 3ZM13 8.92L18.6 19H13V8.92ZM11 8.92V19H5.4L11 8.92Z" />
    </Svg>
  )
}

Icon.displayName = 'Details'

/**
 * Material Icon: Details
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:details Material Icon Docs}
 */
export const Details = memo(Icon)
