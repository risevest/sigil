import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z" />
      <Path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" />
      <Path d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z" />
      <Path d="M18.3475 4.2271L13.9431 8.61904L15.3553 10.0352L19.7597 5.6433L18.3475 4.2271Z" />
      <Path d="M8.32 9.68L8.63 10L10.05 8.59L6.03 4.55H6.02L5.71 4.23L4.29 5.64L8.31 9.69L8.32 9.68Z" />
      <Path d="M15.41 13.94L14 15.35L17.99 19.36L18.34 19.71L19.76 18.3L15.77 14.29L15.41 13.94Z" />
      <Path d="M8.59 13.95L4.56 17.96L4.24 18.29L5.65 19.7L9.68 15.68L10.01 15.36L8.59 13.95Z" />
      <Path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" />
    </Svg>
  )
}

Icon.displayName = 'Stream'

/**
 * Material Icon: Stream
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stream Material Icon Docs}
 */
export const Stream = memo(Icon)
