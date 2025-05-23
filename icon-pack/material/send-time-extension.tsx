import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M17 6.25V12.51L19 13.51V6.25C19 5.15 18.1 4.25 17 4.25H13C13 2.87 11.88 1.75 10.5 1.75C9.12 1.75 8 2.87 8 4.25H4.01C2.91 4.25 2.01 5.15 2.01 6.25V10.05C4.7 10.05 5 12.21 5 12.75C5 13.29 4.71 15.45 2 15.45V19.25C2 20.35 2.9 21.25 4 21.25H7.8C7.8 19.09 9.17 18.47 10 18.31V16.28C8.57 16.45 6.85 17.32 6.13 19.25H4V17.12C6.17 16.32 7 14.25 7 12.75C7 11.26 6.17 9.19 4.01 8.38V6.25H10V4.25C10 3.97 10.22 3.75 10.5 3.75C10.78 3.75 11 3.97 11 4.25V6.25H17Z"
        fill={color}
      />
      <Path d="M12 12.25V16.25L16 17.25L12 18.25V22.25L22 17.25L12 12.25Z" fill={color} />
    </Svg>
  )
}

Icon.displayName = 'SendTimeExtension'

/**
 * Material Icon: Send Time Extension
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:send_time_extension Material Icon Docs}
 */
export const SendTimeExtension = memo(Icon)
