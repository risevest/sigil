import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.02 13.5C4.81 13.5 3.02 15.29 3.02 17.5C3.02 19.71 4.81 21.5 7.02 21.5C9.23 21.5 11.02 19.71 11.02 17.5C11.02 15.29 9.23 13.5 7.02 13.5ZM7.02 19.5C5.92 19.5 5.02 18.6 5.02 17.5C5.02 16.4 5.92 15.5 7.02 15.5C8.12 15.5 9.02 16.4 9.02 17.5C9.02 18.6 8.12 19.5 7.02 19.5ZM13 13.5V21.5H21V13.5H13ZM19 19.5H15V15.5H19V19.5ZM7 2.5L2 11.5H12L7 2.5ZM7 6.62L8.6 9.5H5.4L7 6.62ZM19.25 3C18.19 3 17.44 3.56 17 4.17C16.56 3.56 15.81 3 14.75 3C13.19 3 12 4.28 12 5.75C12 7.75 14.42 9.17 17 11.5C19.58 9.17 22 7.75 22 5.75C22 4.28 20.81 3 19.25 3ZM17 8.85C15.55 7.63 14 6.45 14 5.75C14 5.32 14.35 5 14.75 5C15.06 5 15.27 5.17 15.48 5.37L17 6.8L18.52 5.37C18.73 5.17 18.94 5 19.25 5C19.65 5 20 5.32 20 5.75C20 6.45 18.45 7.63 17 8.85Z" />
    </Svg>
  )
}

Icon.displayName = 'Interests'

/**
 * Material Icon: Interests
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:interests Material Icon Docs}
 */
export const Interests = memo(Icon)
