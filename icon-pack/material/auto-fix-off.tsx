import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.805 7.19531L20.745 5.13531L22.805 4.19531L20.745 3.25531L19.805 1.19531L18.865 3.25531L16.805 4.19531L18.865 5.13531L19.805 7.19531Z" />
      <Path d="M13.975 8.61531L15.385 10.0253L13.925 11.4853L15.335 12.8953L17.505 10.7253C17.895 10.3353 17.895 9.70531 17.505 9.31531L14.675 6.48531C14.485 6.29531 14.235 6.19531 13.975 6.19531C13.715 6.19531 13.465 6.29531 13.265 6.48531L11.095 8.65531L12.505 10.0653L13.975 8.61531Z" />
      <Path d="M1.19501 4.41531L8.26501 11.4853L2.09501 17.6553C1.70501 18.0453 1.70501 18.6753 2.09501 19.0653L4.92501 21.8953C5.12501 22.0953 5.37501 22.1953 5.63501 22.1953C5.89501 22.1953 6.14501 22.0953 6.34501 21.9053L12.515 15.7353L19.585 22.8053L20.995 21.3953L2.61501 3.00531L1.19501 4.41531ZM11.095 14.3153L5.63501 19.7753L4.22501 18.3653L9.68501 12.9053L11.095 14.3153Z" />
    </Svg>
  )
}

Icon.displayName = 'AutoFixOff'

/**
 * Material Icon: Auto Fix Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:auto_fix_off Material Icon Docs}
 */
export const AutoFixOff = memo(Icon)
