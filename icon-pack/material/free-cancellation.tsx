import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.6199 19.75H4.40991V9.75H18.4099V14.13L20.4099 12.13V5.75C20.4099 4.65 19.5099 3.75 18.4099 3.75H17.4099V1.75H15.4099V3.75H7.40991V1.75H5.40991V3.75H4.40991C3.29991 3.75 2.41991 4.65 2.41991 5.75L2.40991 19.75C2.40991 20.85 3.29991 21.75 4.40991 21.75H12.6199L10.6199 19.75ZM4.40991 5.75H18.4099V7.75H4.40991V5.75ZM15.9499 22.25L12.4099 18.71L13.8199 17.3L15.9399 19.42L20.1799 15.18L21.5899 16.59L15.9499 22.25ZM9.81991 13.75L11.4099 15.34L9.99991 16.75L8.40991 15.16L6.81991 16.75L5.40991 15.34L6.99991 13.75L5.40991 12.16L6.81991 10.75L8.40991 12.34L9.99991 10.75L11.4099 12.16L9.81991 13.75Z" />
    </Svg>
  )
}

Icon.displayName = 'FreeCancellation'

/**
 * Material Icon: Free Cancellation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:free_cancellation Material Icon Docs}
 */
export const FreeCancellation = memo(Icon)
