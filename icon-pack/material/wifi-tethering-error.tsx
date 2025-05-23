import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7.46484C8.69 7.46484 6 10.1548 6 13.4648C6 15.1248 6.68 16.6148 7.76 17.7048L9.18 16.2848C8.45 15.5648 8 14.5748 8 13.4648C8 11.2548 9.79 9.46484 12 9.46484C14.21 9.46484 16 11.2548 16 13.4648C16 14.5748 15.55 15.5648 14.82 16.2848L16.24 17.7048C17.32 16.6148 18 15.1248 18 13.4648C18 10.1548 15.31 7.46484 12 7.46484ZM12 3.46484C6.48 3.46484 2 7.94484 2 13.4648C2 16.2248 3.12 18.7248 4.93 20.5348L6.35 19.1148C4.9 17.6748 4 15.6748 4 13.4648C4 9.04484 7.58 5.46484 12 5.46484C14.53 5.46484 16.78 6.63484 18.24 8.46484H20.66C18.93 5.47484 15.7 3.46484 12 3.46484ZM12 11.4648C10.9 11.4648 10 12.3648 10 13.4648C10 14.0148 10.23 14.5148 10.59 14.8748C10.95 15.2348 11.45 15.4648 12 15.4648C12.55 15.4648 13.05 15.2348 13.41 14.8748C13.77 14.5148 14 14.0148 14 13.4648C14 12.3648 13.1 11.4648 12 11.4648ZM20 10.4648H22V16.4648H20V10.4648ZM20 18.4648H22V20.4648H20V18.4648Z" />
    </Svg>
  )
}

Icon.displayName = 'WifiTetheringError'

/**
 * Material Icon: Wifi Tethering Error
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_tethering_error Material Icon Docs}
 */
export const WifiTetheringError = memo(Icon)
