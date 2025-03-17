import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.545 7.29547H21.715V5.29547H9.545L11.545 7.29547ZM16.545 12.2955H18.715V10.2955H14.545L16.545 12.2955ZM14.715 16.1255V17.2955H10.715V15.2955H13.885L10.885 12.2955H6.715V10.2955H8.885L5.885 7.29547H3.715V5.29547H3.885L2.105 3.51547L3.515 2.10547L21.895 20.4855L20.485 21.8955L14.715 16.1255Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterListOff'

/**
 * Material Icon: Filter List Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_list_off Material Icon Docs}
 */
export const FilterListOff = memo(Icon)
