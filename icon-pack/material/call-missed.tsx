import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M19.59 6.79492L12 14.3849L6.41 8.79492H11V6.79492H3V14.7949H5V10.2049L12 17.2049L21 8.20492L19.59 6.79492Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CallMissed'

/**
 * Material Icon: Call Missed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:call_missed Material Icon Docs}
 */
export const CallMissed = memo(Icon)
