import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.501 11L9.64546 11.0069C10.3586 11.075 10.926 11.6424 10.9941 12.3555L11.001 12.5L10.9941 12.6445C10.926 13.3576 10.3586 13.925 9.64546 13.9931L9.501 14H6.001V16H9.501C11.2009 16 12.6178 14.7881 12.9348 13.1811L12.9654 13.0009L19.001 13C19.7123 13 20.3889 12.8515 21.0015 12.5837L21.001 17C21.001 18.3059 20.1666 19.4169 19.0019 19.829L19.001 21C19.001 21.5523 18.5533 22 18.001 22H6.001C5.44872 22 5.001 21.5523 5.001 21L5.00109 19.8293C3.83585 19.4175 3.001 18.3063 3.001 17V13C3.001 11.8954 3.89643 11 5.001 11H9.501ZM22.001 7.5V8L21.9959 8.17627C21.908 9.69275 20.6938 10.907 19.1773 10.9949L19.001 11H12.6642C12.1305 9.87663 11.0161 9.08266 9.70894 9.00607L9.501 9H5.001C4.27201 9 3.58857 9.19501 3 9.53571L3.001 6C3.001 3.79086 4.79186 2 7.001 2H16.501C19.5386 2 22.001 4.46243 22.001 7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'BoxingFill'

/**
 * Remix Icon: Boxing Fill
 * @see {@link https://remixicon.com/icon/boxing-fill Remix Icon Docs}
 */
export const BoxingFill = memo(Icon)
