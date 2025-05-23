import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5596)">
        <Path d="M16 7.00045H15L14 6.00045H10L9 7.00045H8C6.9 7.00045 6 7.90045 6 9.00045V15.0005C6 16.1005 6.9 17.0005 8 17.0005H16C17.1 17.0005 18 16.1005 18 15.0005V9.00045C18 7.90045 17.1 7.00045 16 7.00045ZM16 15.0005H8V9.00045H9.83L10.83 8.00045H13.17L14.17 9.00045H16V15.0005Z" />
        <Path d="M12 14.0005C13.1046 14.0005 14 13.105 14 12.0005C14 10.8959 13.1046 10.0005 12 10.0005C10.8954 10.0005 10 10.8959 10 12.0005C10 13.105 10.8954 14.0005 12 14.0005Z" />
        <Path d="M8.57 0.520451L13.05 5.00045L14.46 3.59045L12.92 2.05045C17.7 2.46045 21.53 6.24045 22 11.0005H24C23.36 3.30045 15.79 -1.66955 8.57 0.520451Z" />
        <Path d="M9.54 20.4104L11.08 21.9505C6.3 21.5405 2.47 17.7605 2 13.0005H0C0.64 20.7005 8.21 25.6705 15.43 23.4804L10.95 19.0005L9.54 20.4104Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5596">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Cameraswitch'

/**
 * Material Icon: Cameraswitch
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cameraswitch Material Icon Docs}
 */
export const Cameraswitch = memo(Icon)
