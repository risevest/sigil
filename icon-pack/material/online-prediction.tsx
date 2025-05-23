import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 11.4997C15.5 13.4997 13 14.9997 13 16.4997H11C11 14.9997 8.5 13.4997 8.5 11.4997C8.5 9.56969 10.07 7.99969 12 7.99969C13.93 7.99969 15.5 9.56969 15.5 11.4997ZM13 17.4997H11V18.9997H13V17.4997ZM22 11.9997C22 9.23969 20.88 6.73969 19.07 4.92969L18.01 5.98969C19.55 7.52969 20.5 9.65969 20.5 11.9997C20.5 14.3397 19.55 16.4697 18.01 18.0097L19.07 19.0697C20.88 17.2597 22 14.7597 22 11.9997ZM3.5 11.9997C3.5 9.65969 4.45 7.52969 5.99 5.98969L4.93 4.92969C3.12 6.73969 2 9.23969 2 11.9997C2 14.7597 3.12 17.2597 4.93 19.0697L5.99 18.0097C4.45 16.4697 3.5 14.3397 3.5 11.9997ZM17.5 11.9997C17.5 13.5197 16.88 14.8897 15.89 15.8897L16.95 16.9497C18.22 15.6797 19 13.9297 19 11.9997C19 10.0697 18.22 8.31969 16.95 7.04969L15.89 8.10969C16.88 9.10969 17.5 10.4797 17.5 11.9997ZM7.05 16.9497L8.11 15.8897C7.11 14.8897 6.5 13.5197 6.5 11.9997C6.5 10.4797 7.12 9.10969 8.11 8.10969L7.05 7.04969C5.78 8.31969 5 10.0697 5 11.9997C5 13.9297 5.78 15.6797 7.05 16.9497Z" />
    </Svg>
  )
}

Icon.displayName = 'OnlinePrediction'

/**
 * Material Icon: Online Prediction
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:online_prediction Material Icon Docs}
 */
export const OnlinePrediction = memo(Icon)
