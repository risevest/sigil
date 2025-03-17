import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 7H10.5C9.4 7 8.5 7.9 8.5 9V15C8.5 16.1 9.4 17 10.5 17H13.5C14.6 17 15.5 16.1 15.5 15V9C15.5 7.9 14.6 7 13.5 7ZM13.5 15H10.5V9H13.5V15ZM1 15H5V13H3C1.9 13 1 12.1 1 11V9C1 7.9 1.9 7 3 7H7V9H3V11H5C6.1 11 7 11.9 7 13V15C7 16.1 6.1 17 5 17H1V15ZM17 15H21V13H19C17.9 13 17 12.1 17 11V9C17 7.9 17.9 7 19 7H23V9H19V11H21C22.1 11 23 11.9 23 13V15C23 16.1 22.1 17 21 17H17V15Z" />
    </Svg>
  )
}

Icon.displayName = 'Sos'

/**
 * Material Icon: Sos
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sos Material Icon Docs}
 */
export const Sos = memo(Icon)
