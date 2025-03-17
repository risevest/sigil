import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.705 4.33984C10.705 2.67984 9.36502 1.33984 7.70502 1.33984C7.08502 1.33984 6.51502 1.52984 6.03502 1.83984L10.185 5.98984C10.505 5.51984 10.705 4.94984 10.705 4.33984Z" />
      <Path d="M14.705 5.33984C14.705 4.23984 15.605 3.33984 16.705 3.33984C17.805 3.33984 18.705 4.23984 18.705 5.33984V14.5098L20.705 16.5098V5.33984C20.705 3.12984 18.915 1.33984 16.705 1.33984C14.495 1.33984 12.705 3.12984 12.705 5.33984V8.50984L14.705 10.5098V5.33984Z" />
      <Path d="M2.80502 1.43984L1.39502 2.84984L5.87502 7.33984H4.70502L5.70502 17.3398H6.70502C6.70502 19.5498 8.49502 21.3398 10.705 21.3398C12.915 21.3398 14.705 19.5498 14.705 17.3398V16.1698L21.195 22.6598L22.605 21.2498L2.80502 1.43984ZM7.89502 15.3398H7.51502L6.91502 9.33984H7.87502L8.43502 9.89985L7.89502 15.3398ZM12.705 17.3398C12.705 18.4398 11.805 19.3398 10.705 19.3398C9.60502 19.3398 8.70502 18.4398 8.70502 17.3398H9.70502L10.265 11.7298L12.705 14.1698V17.3398Z" />
    </Svg>
  )
}

Icon.displayName = 'MicExternalOff'

/**
 * Material Icon: Mic External Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mic_external_off Material Icon Docs}
 */
export const MicExternalOff = memo(Icon)
