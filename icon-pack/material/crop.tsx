import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 15H19V7C19 5.9 18.1 5 17 5H9V7H17V15ZM7 17V1H5V5H1V7H5V17C5 18.1 5.9 19 7 19H17V23H19V19H23V17H7Z" />
    </Svg>
  )
}

Icon.displayName = 'Crop'

/**
 * Material Icon: Crop
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crop Material Icon Docs}
 */
export const Crop = memo(Icon)
