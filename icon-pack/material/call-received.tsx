import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M19.5 5.91L18.09 4.5L6.5 16.09V9.5H4.5V19.5H14.5V17.5H7.91L19.5 5.91Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CallReceived'

/**
 * Material Icon: Call Received
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:call_received Material Icon Docs}
 */
export const CallReceived = memo(Icon)
