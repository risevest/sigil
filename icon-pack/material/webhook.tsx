import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 15.5H15.88C16.15 15.19 16.55 15 17 15C17.83 15 18.5 15.67 18.5 16.5C18.5 17.33 17.83 18 17 18C16.56 18 16.16 17.81 15.88 17.5H11.9C11.44 19.78 9.42 21.5 7 21.5C4.24 21.5 2 19.26 2 16.5C2 14.08 3.72 12.06 6 11.6V13.67C4.84 14.08 4 15.2 4 16.5C4 18.15 5.35 19.5 7 19.5C8.65 19.5 10 18.15 10 16.5V15.5ZM12.5 4.5C14.15 4.5 15.5 5.85 15.5 7.5H17.5C17.5 4.74 15.26 2.5 12.5 2.5C9.74 2.5 7.5 4.74 7.5 7.5C7.5 8.93 8.1 10.21 9.05 11.12L6.7 15.02C6.02 15.16 5.5 15.77 5.5 16.5C5.5 17.33 6.17 18 7 18C7.83 18 8.5 17.33 8.5 16.5C8.5 16.34 8.48 16.19 8.43 16.05L11.81 10.42C10.49 10.11 9.5 8.92 9.5 7.5C9.5 5.85 10.85 4.5 12.5 4.5ZM17 13.5C16.36 13.5 15.77 13.7 15.28 14.04L12.23 8.97C11.53 8.85 11 8.24 11 7.5C11 6.67 11.67 6 12.5 6C13.33 6 14 6.67 14 7.5C14 7.65 13.98 7.79 13.94 7.93L16.13 11.58C16.41 11.53 16.7 11.5 17 11.5C19.76 11.5 22 13.74 22 16.5C22 19.26 19.76 21.5 17 21.5C15.15 21.5 13.53 20.49 12.67 19H15.34C15.82 19.32 16.39 19.5 17 19.5C18.65 19.5 20 18.15 20 16.5C20 14.85 18.65 13.5 17 13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Webhook'

/**
 * Material Icon: Webhook
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:webhook Material Icon Docs}
 */
export const Webhook = memo(Icon)
