import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Path
        d="M13.49 11.38C13.92 10.16 13.66 8.74 12.68 7.76C11.57 6.65 9.89 6.46 8.58 7.17L10.93 9.52L9.52 10.93L7.17 8.58C6.46 9.9 6.65 11.57 7.76 12.68C8.74 13.66 10.16 13.92 11.38 13.49L14.79 16.9C14.99 17.1 15.3 17.1 15.5 16.9L16.9 15.5C17.1 15.3 17.1 14.99 16.9 14.79L13.49 11.38Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  )
}

Icon.displayName = 'BuildCircle'

/**
 * Material Icon: Build Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:build_circle Material Icon Docs}
 */
export const BuildCircle = memo(Icon)
