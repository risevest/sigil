import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.71 16.4655L17.34 13.0855C17.98 13.3055 18.57 13.5655 19.11 13.8455C20.08 14.3555 20.69 15.3655 20.71 16.4655ZM21.9 20.4855L20.49 21.8955L17.88 19.2955H4.70998V16.5155C4.70998 15.3955 5.31998 14.3655 6.31998 13.8555C7.60998 13.1955 9.18997 12.6355 10.99 12.4055L2.09998 3.51547L3.50998 2.10547L21.9 20.4855ZM15.88 17.2955L12.88 14.2955C12.82 14.2955 12.77 14.2955 12.71 14.2955C10.34 14.2955 8.41998 15.0255 7.22998 15.6355C6.90998 15.7955 6.70998 16.1355 6.70998 16.5155V17.2955H15.88ZM12.71 5.29547C13.81 5.29547 14.71 6.19547 14.71 7.29547C14.71 8.15547 14.17 8.88547 13.41 9.16547L14.89 10.6455C15.99 9.93547 16.71 8.69547 16.71 7.29547C16.71 5.08547 14.92 3.29547 12.71 3.29547C11.31 3.29547 10.07 4.01547 9.35998 5.11547L10.84 6.59547C11.12 5.83547 11.85 5.29547 12.71 5.29547Z" />
    </Svg>
  )
}

Icon.displayName = 'PersonOff'

/**
 * Material Icon: Person Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:person_off Material Icon Docs}
 */
export const PersonOff = memo(Icon)
