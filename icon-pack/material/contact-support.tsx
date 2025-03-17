import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.5 23.2951V19.6951C6.49 19.4351 2.5 15.2751 2.5 10.2051C2.5 4.96508 6.76 0.705078 12 0.705078C17.24 0.705078 21.5 4.96508 21.5 10.2051C21.5 15.1551 18.06 20.1351 12.93 22.6051L11.5 23.2951ZM12 2.70508C7.86 2.70508 4.5 6.06508 4.5 10.2051C4.5 14.3451 7.86 17.7051 12 17.7051H13.5V20.0051C17.14 17.7051 19.5 13.9251 19.5 10.2051C19.5 6.06508 16.14 2.70508 12 2.70508ZM11 14.2051H13V16.2051H11V14.2051ZM13 12.7051H11C11 9.45508 14 9.70508 14 7.70508C14 6.60508 13.1 5.70508 12 5.70508C10.9 5.70508 10 6.60508 10 7.70508H8C8 5.49508 9.79 3.70508 12 3.70508C14.21 3.70508 16 5.49508 16 7.70508C16 10.2051 13 10.4551 13 12.7051Z" />
    </Svg>
  )
}

Icon.displayName = 'ContactSupport'

/**
 * Material Icon: Contact Support
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:contact_support Material Icon Docs}
 */
export const ContactSupport = memo(Icon)
