import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.5228 2 22 6.47715 22 12C22 14.1364 21.3301 16.1162 20.1889 17.741L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1023 19.1517 17.5398 17.7716L18.5379 19.567C16.7848 21.083 14.4995 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7C13.6569 7 15 8.34315 15 10V11H16V16H8V11H9V10C9 8.34315 10.3431 7 12 7ZM12 9C11.4872 9 11.0645 9.38604 11.0067 9.88338L11 10V11H13V10C13 9.48716 12.614 9.06449 12.1166 9.00673L12 9Z" />
    </Svg>
  )
}

Icon.displayName = 'RotateLockFill'

/**
 * Remix Icon: Rotate Lock Fill
 * @see {@link https://remixicon.com/icon/rotate-lock-fill Remix Icon Docs}
 */
export const RotateLockFill = memo(Icon)
