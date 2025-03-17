import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.8905 11.77L15.0905 10.1C14.9605 10.04 14.8105 10 14.6505 10H14.0005V5.5C14.0005 4.12 12.8805 3 11.5005 3C10.1205 3 9.00049 4.12 9.00049 5.5V13.65L7.13049 13.25C6.94049 13.22 6.11049 13.1 5.40049 13.81L4.00049 15.22L9.12049 20.41C9.49049 20.79 10.0005 21 10.5305 21H17.0805C18.0605 21 18.8905 20.3 19.0505 19.33L19.9705 13.89C20.1205 13.03 19.6805 12.17 18.8905 11.77ZM17.0805 19H10.5305L6.83049 15.22L11.0005 16.11V5.5C11.0005 5.22 11.2205 5 11.5005 5C11.7805 5 12.0005 5.22 12.0005 5.5V11.68H13.7605L18.0005 13.56L17.0805 19Z" />
    </Svg>
  )
}

Icon.displayName = 'PanToolAlt'

/**
 * Material Icon: Pan Tool Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pan_tool_alt Material Icon Docs}
 */
export const PanToolAlt = memo(Icon)
