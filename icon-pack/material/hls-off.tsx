import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.545 14.2955H20.215C20.765 14.2955 21.215 13.8455 21.215 13.2955V11.7955C21.215 11.2455 20.765 10.7955 20.215 10.7955H17.715V9.79547H19.715V10.2955H21.215V9.29547C21.215 8.74547 20.765 8.29547 20.215 8.29547H17.215C16.665 8.29547 16.215 8.74547 16.215 9.29547V10.7955C16.215 11.3455 16.665 11.7955 17.215 11.7955H19.715V12.7955H17.715V12.2955H16.545L18.545 14.2955ZM8.71498 10.1255V14.2955H7.21498V11.7955H5.21498V14.2955H3.71498V8.29547H5.21498V10.2955H7.21498V8.62547L2.10498 3.51547L3.51498 2.10547L21.895 20.4855L20.485 21.8955L12.885 14.2955H10.715V12.1255L8.71498 10.1255Z" />
    </Svg>
  )
}

Icon.displayName = 'HlsOff'

/**
 * Material Icon: Hls Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hls_off Material Icon Docs}
 */
export const HlsOff = memo(Icon)
