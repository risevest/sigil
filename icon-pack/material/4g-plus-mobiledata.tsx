import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 11V13H14.5V15H10.5V9H16.5C16.5 7.9 15.6 7 14.5 7H10.5C9.4 7 8.5 7.9 8.5 9V15C8.5 16.1 9.4 17 10.5 17H14.5C15.6 17 16.5 16.1 16.5 15V11H12.5ZM23.5 11H21.5V9H19.5V11H17.5V13H19.5V15H21.5V13H23.5V11ZM6.5 7H4.5V12H2.5V7H0.5V14H4.5V17H6.5V14H7.5V12H6.5V7Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi4gPlusMobiledata'

/**
 * Material Icon: 4g Plus Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:4g_plus_mobiledata Material Icon Docs}
 */
export const Mi4gPlusMobiledata = memo(Icon)
