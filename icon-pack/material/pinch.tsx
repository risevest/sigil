import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.00049 2.5V1H11.0005V6H9.50049V3.56L3.56049 9.5H6.00049V11H1.00049V6H2.50049V8.44L8.44049 2.5H6.00049ZM21.8905 13.77L18.0905 12.1C17.9605 12.04 17.8105 12 17.6505 12H17.0005V7.5C17.0005 6.12 15.8805 5 14.5005 5C13.1205 5 12.0005 6.12 12.0005 7.5V15.65L10.1305 15.25C9.94049 15.22 9.11049 15.1 8.40049 15.81L7.00049 17.22L12.1205 22.41C12.4905 22.79 13.0005 23 13.5305 23H20.0805C21.0605 23 21.8905 22.3 22.0505 21.33L22.9705 15.89C23.1205 15.03 22.6805 14.17 21.8905 13.77ZM20.0805 21H13.5305L9.83049 17.22L14.0005 18.11V7.5C14.0005 7.22 14.2205 7 14.5005 7C14.7805 7 15.0005 7.22 15.0005 7.5V13.68H16.7605L21.0005 15.56L20.0805 21Z" />
    </Svg>
  )
}

Icon.displayName = 'Pinch'

/**
 * Material Icon: Pinch
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pinch Material Icon Docs}
 */
export const Pinch = memo(Icon)
