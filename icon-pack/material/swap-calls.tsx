import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M18 4.5L14 8.5H17V15.5C17 16.6 16.1 17.5 15 17.5C13.9 17.5 13 16.6 13 15.5V8.5C13 6.29 11.21 4.5 9 4.5C6.79 4.5 5 6.29 5 8.5V15.5H2L6 19.5L10 15.5H7V8.5C7 7.4 7.9 6.5 9 6.5C10.1 6.5 11 7.4 11 8.5V15.5C11 17.71 12.79 19.5 15 19.5C17.21 19.5 19 17.71 19 15.5V8.5H22L18 4.5Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'SwapCalls'

/**
 * Material Icon: Swap Calls
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swap_calls Material Icon Docs}
 */
export const SwapCalls = memo(Icon)
