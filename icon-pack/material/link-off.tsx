import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.39 11.0648L16 12.6748V11.0648H14.39ZM17 7.06481H13V8.9648H17C18.71 8.9648 20.1 10.3548 20.1 12.0648C20.1 13.3348 19.33 14.4348 18.23 14.9048L19.63 16.3048C21.05 15.4248 22 13.8548 22 12.0648C22 9.3048 19.76 7.06481 17 7.06481ZM2 4.3348L5.11 7.44481C3.29 8.1848 2 9.9748 2 12.0648C2 14.8248 4.24 17.0648 7 17.0648H11V15.1648H7C5.29 15.1648 3.9 13.7748 3.9 12.0648C3.9 10.4748 5.11 9.16481 6.66 8.99481L8.73 11.0648H8V13.0648H10.73L13 15.3348V17.0648H14.73L18.74 21.0748L20.15 19.6648L3.41 2.9248L2 4.3348Z" />
    </Svg>
  )
}

Icon.displayName = 'LinkOff'

/**
 * Material Icon: Link Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:link_off Material Icon Docs}
 */
export const LinkOff = memo(Icon)
