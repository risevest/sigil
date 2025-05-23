import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M10.2 12.8255L8.49 11.1155C8.5 11.1755 8.5 11.2355 8.5 11.2955C8.5 12.3955 7.6 13.2955 6.5 13.2955C5.4 13.2955 4.5 12.3955 4.5 11.2955C4.5 10.1955 5.4 9.29547 6.5 9.29547C6.56 9.29547 6.62 9.29547 6.68 9.30547L4.97 7.59547C3.52 8.19547 2.5 9.62547 2.5 11.2955C2.5 13.5055 4.29 15.2955 6.5 15.2955C8.17 15.2955 9.6 14.2755 10.2 12.8255ZM11.69 14.3155C10.65 16.0955 8.71 17.2955 6.5 17.2955C3.19 17.2955 0.5 14.6055 0.5 11.2955C0.5 9.08547 1.7 7.14547 3.48 6.10547L0.89 3.51547L2.3 2.10547L20.68 20.4855L19.27 21.8955L11.69 14.3155ZM15.76 12.7255L17 11.7955L18.81 13.1555L20.67 11.2955L19.67 10.2955H13.33L11.33 8.29547H20.5L23.5 11.2955L19 15.7955L18.31 15.2855L15.76 12.7255Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'KeyOff'

/**
 * Material Icon: Key Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:key_off Material Icon Docs}
 */
export const KeyOff = memo(Icon)
