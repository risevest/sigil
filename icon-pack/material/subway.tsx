import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.8 2.8C16 2.09 13.86 2 12 2C10.14 2 8 2.09 6.2 2.8C3.53 3.84 2 6.05 2 8.86V22H22V8.86C22 6.05 20.47 3.84 17.8 2.8ZM9.17 20L10.67 18.5H13.33L14.83 20H9.17ZM7.01 14V9H17.01V14H7.01ZM16.5 16C16.5 16.55 16.05 17 15.5 17C14.95 17 14.5 16.55 14.5 16C14.5 15.45 14.95 15 15.5 15C16.05 15 16.5 15.45 16.5 16ZM8.5 15C9.05 15 9.5 15.45 9.5 16C9.5 16.55 9.05 17 8.5 17C7.95 17 7.5 16.55 7.5 16C7.5 15.45 7.95 15 8.5 15ZM20 20H16.5V19.62L15.35 18.46C16.84 18.29 18 17.04 18 15.5V9C18 6.37 15 6 12 6C9 6 6 6.37 6 9V15.5C6 17.04 7.16 18.29 8.65 18.46L7.5 19.62V20H4V8.86C4 6.86 5.01 5.41 6.93 4.66C8.41 4.08 10.32 4 12 4C13.68 4 15.59 4.08 17.07 4.66C18.99 5.41 20 6.86 20 8.86V20Z" />
    </Svg>
  )
}

Icon.displayName = 'Subway'

/**
 * Material Icon: Subway
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:subway Material Icon Docs}
 */
export const Subway = memo(Icon)
