import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.59 6H5.42L6.24 5ZM5 19V8H19V19H5ZM8 14H10.55V17H13.45V14H16L12 10L8 14Z" />
    </Svg>
  )
}

Icon.displayName = 'Unarchive'

/**
 * Material Icon: Unarchive
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:unarchive Material Icon Docs}
 */
export const Unarchive = memo(Icon)
