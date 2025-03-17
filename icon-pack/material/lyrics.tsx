import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 6.5H5V8.5H12V6.5Z" />
      <Path d="M9 12.5H5V14.5H9V12.5Z" />
      <Path d="M14 12.47V16.5H5L3 18.5V4.5H14V6.53C14.52 5.84 15.2 5.28 16 4.93V4.5C16 3.4 15.1 2.5 14 2.5H3C1.9 2.5 1.01 3.4 1.01 4.5L1 22.5L5 18.5H14C15.1 18.5 16 17.6 16 16.5V14.08C15.2 13.72 14.52 13.16 14 12.47Z" />
      <Path d="M12 9.5H5V11.5H12V9.5Z" />
      <Path d="M19 6.68C18.69 6.57 18.35 6.5 18 6.5C16.34 6.5 15 7.84 15 9.5C15 11.16 16.34 12.5 18 12.5C19.66 12.5 21 11.16 21 9.5V3.5H23V1.5H19V6.68Z" />
    </Svg>
  )
}

Icon.displayName = 'Lyrics'

/**
 * Material Icon: Lyrics
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lyrics Material Icon Docs}
 */
export const Lyrics = memo(Icon)
