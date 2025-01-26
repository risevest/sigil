import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.4851 3.12124L20.2425 5.0606C20.6877 5.1719 21 5.57188 21 6.03075V6.99952L22 6.99997C23.1 6.99997 24 7.89997 24 8.99997V12C24 13.6568 22.6569 15 21 15L20.5789 15.0003C20.0443 16.3501 19.0275 17.4862 17.6833 18.1583L12.8944 20.5528C12.3314 20.8343 11.6686 20.8343 11.1056 20.5528L6.31672 18.1583C4.97252 17.4862 3.95573 16.3501 3.42113 15.0003L3 15C1.34315 15 0 13.6568 0 12V8.99997C0 7.8954 0.89543 6.99997 2 6.99997L3 6.99952V6.03075C3 5.57188 3.3123 5.1719 3.75746 5.0606L11.5149 3.12124C11.8334 3.04162 12.1666 3.04162 12.4851 3.12124ZM12 5.06152L5 6.81152V12.7918C5 14.3069 5.85601 15.6919 7.21115 16.3695L12 18.7639L16.7889 16.3695C18.144 15.6919 19 14.3069 19 12.7918V6.81152L12 5.06152ZM3 8.99997H2V12C2 12.5523 2.44772 13 3 13V8.99997ZM22 8.99997H21V13C21.5523 13 22 12.5523 22 12V8.99997Z" />
    </Svg>
  )
}

Icon.displayName = 'SurgicalMaskLine'

/**
 * Remix Icon: Surgical Mask Line
 * @see {@link https://remixicon.com/icon/surgical-mask-line Remix Icon Docs}
 */
export const SurgicalMaskLine = memo(Icon)