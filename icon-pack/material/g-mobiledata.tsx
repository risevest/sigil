import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 11V13H14.5V15H9.5V9H16.5C16.5 7.9 15.6 7 14.5 7H9.5C8.4 7 7.5 7.9 7.5 9V15C7.5 16.1 8.4 17 9.5 17H14.5C15.6 17 16.5 16.1 16.5 15V11H12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'GMobiledata'

/**
 * Material Icon: G Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:g_mobiledata Material Icon Docs}
 */
export const GMobiledata = memo(Icon)
