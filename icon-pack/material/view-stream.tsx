import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7ZM19 17H5V13H19V17ZM5 11V7H19V11H5Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewStream'

/**
 * Material Icon: View Stream
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_stream Material Icon Docs}
 */
export const ViewStream = memo(Icon)
