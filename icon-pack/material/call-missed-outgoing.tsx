import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M3 8.20492L12 17.2049L19 10.2049V14.7949H21V6.79492H13V8.79492H17.59L12 14.3849L4.41 6.79492L3 8.20492Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CallMissedOutgoing'

/**
 * Material Icon: Call Missed Outgoing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:call_missed_outgoing Material Icon Docs}
 */
export const CallMissedOutgoing = memo(Icon)
