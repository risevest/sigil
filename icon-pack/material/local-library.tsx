import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 9.22461C14.21 9.22461 16 7.43461 16 5.22461C16 3.01461 14.21 1.22461 12 1.22461C9.79 1.22461 8 3.01461 8 5.22461C8 7.43461 9.79 9.22461 12 9.22461ZM12 3.22461C13.1 3.22461 14 4.12461 14 5.22461C14 6.32461 13.1 7.22461 12 7.22461C10.9 7.22461 10 6.32461 10 5.22461C10 4.12461 10.9 3.22461 12 3.22461ZM12 11.7746C9.64 9.57461 6.48 8.22461 3 8.22461V19.2246C6.48 19.2246 9.64 20.5746 12 22.7746C14.36 20.5846 17.52 19.2246 21 19.2246V8.22461C17.52 8.22461 14.36 9.57461 12 11.7746ZM19 17.3546C16.47 17.6946 14.07 18.6546 12 20.1746C9.94 18.6546 7.53 17.6846 5 17.3446V10.3946C7.1 10.7746 9.05 11.7446 10.64 13.2246L12 14.5046L13.36 13.2346C14.95 11.7546 16.9 10.7846 19 10.4046V17.3546Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalLibrary'

/**
 * Material Icon: Local Library
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_library Material Icon Docs}
 */
export const LocalLibrary = memo(Icon)
