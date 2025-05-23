import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.56 18H17.56V19H20.56V20H16.56V18C16.56 17.45 17.01 17 17.56 17H19.56V16H16.56V15H19.56C20.11 15 20.56 15.45 20.56 16V17C20.56 17.55 20.11 18 19.56 18ZM3.44 18H6.1L9.5 12.58H9.62L13.02 18H15.68L11.03 10.73L15.37 4H12.69L9.62 8.99H9.5L6.41 4H3.75L8.07 10.73L3.44 18Z" />
    </Svg>
  )
}

Icon.displayName = 'Subscript'

/**
 * Material Icon: Subscript
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:subscript Material Icon Docs}
 */
export const Subscript = memo(Icon)
