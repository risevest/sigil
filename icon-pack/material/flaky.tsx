import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M14.05 17.58L14.04 17.59L11.64 15.19L12.7 14.13L14.05 15.48L16.54 13L17.6 14.06L14.06 17.6L14.05 17.58ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM7.34 6.28L8.75 7.69L10.16 6.28L11.22 7.34L9.81 8.75L11.22 10.16L10.16 11.22L8.75 9.81L7.34 11.22L6.28 10.16L7.69 8.75L6.28 7.34L7.34 6.28ZM12 20C9.8 20 7.8 19.1 6.3 17.7L17.7 6.3C19.1 7.8 20 9.8 20 12C20 16.4 16.4 20 12 20Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  )
}

Icon.displayName = 'Flaky'

/**
 * Material Icon: Flaky
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flaky Material Icon Docs}
 */
export const Flaky = memo(Icon)
