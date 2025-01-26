import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.95126 8.53668C10.2131 7.57265 11.7898 7.00002 13.5004 7.00002C17.6425 7.00002 21.0004 10.3579 21.0004 14.5C21.0004 18.6422 17.6425 22 13.5004 22C9.35825 22 6.00038 18.6422 6.00038 14.5C6.00038 12.7895 6.57302 11.2127 7.53705 9.95089L4.66155 7.0754L2.18667 9.55027L0.772461 8.13606L7.13642 1.77209L8.55064 3.18631L6.07576 5.66118L8.95126 8.53668ZM13.5004 20C16.5379 20 19.0004 17.5376 19.0004 14.5C19.0004 11.4625 16.5379 9.00002 13.5004 9.00002C10.4628 9.00002 8.00038 11.4625 8.00038 14.5C8.00038 17.5376 10.4628 20 13.5004 20Z" />
    </Svg>
  )
}

Icon.displayName = 'TravestiLine'

/**
 * Remix Icon: Travesti Line
 * @see {@link https://remixicon.com/icon/travesti-line Remix Icon Docs}
 */
export const TravestiLine = memo(Icon)
