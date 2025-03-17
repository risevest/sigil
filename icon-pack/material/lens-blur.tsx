import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 13C5.45 13 5 13.45 5 14C5 14.55 5.45 15 6 15C6.55 15 7 14.55 7 14C7 13.45 6.55 13 6 13ZM6 17C5.45 17 5 17.45 5 18C5 18.55 5.45 19 6 19C6.55 19 7 18.55 7 18C7 17.45 6.55 17 6 17ZM6 9C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11C6.55 11 7 10.55 7 10C7 9.45 6.55 9 6 9ZM3 9.5C2.72 9.5 2.5 9.72 2.5 10C2.5 10.28 2.72 10.5 3 10.5C3.28 10.5 3.5 10.28 3.5 10C3.5 9.72 3.28 9.5 3 9.5ZM6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5ZM21 10.5C21.28 10.5 21.5 10.28 21.5 10C21.5 9.72 21.28 9.5 21 9.5C20.72 9.5 20.5 9.72 20.5 10C20.5 10.28 20.72 10.5 21 10.5ZM14 7C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5C13.45 5 13 5.45 13 6C13 6.55 13.45 7 14 7ZM14 3.5C14.28 3.5 14.5 3.28 14.5 3C14.5 2.72 14.28 2.5 14 2.5C13.72 2.5 13.5 2.72 13.5 3C13.5 3.28 13.72 3.5 14 3.5ZM3 13.5C2.72 13.5 2.5 13.72 2.5 14C2.5 14.28 2.72 14.5 3 14.5C3.28 14.5 3.5 14.28 3.5 14C3.5 13.72 3.28 13.5 3 13.5ZM10 20.5C9.72 20.5 9.5 20.72 9.5 21C9.5 21.28 9.72 21.5 10 21.5C10.28 21.5 10.5 21.28 10.5 21C10.5 20.72 10.28 20.5 10 20.5ZM10 3.5C10.28 3.5 10.5 3.28 10.5 3C10.5 2.72 10.28 2.5 10 2.5C9.72 2.5 9.5 2.72 9.5 3C9.5 3.28 9.72 3.5 10 3.5ZM10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7ZM10 12.5C9.17 12.5 8.5 13.17 8.5 14C8.5 14.83 9.17 15.5 10 15.5C10.83 15.5 11.5 14.83 11.5 14C11.5 13.17 10.83 12.5 10 12.5ZM18 13C17.45 13 17 13.45 17 14C17 14.55 17.45 15 18 15C18.55 15 19 14.55 19 14C19 13.45 18.55 13 18 13ZM18 17C17.45 17 17 17.45 17 18C17 18.55 17.45 19 18 19C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17ZM18 9C17.45 9 17 9.45 17 10C17 10.55 17.45 11 18 11C18.55 11 19 10.55 19 10C19 9.45 18.55 9 18 9ZM18 5C17.45 5 17 5.45 17 6C17 6.55 17.45 7 18 7C18.55 7 19 6.55 19 6C19 5.45 18.55 5 18 5ZM21 13.5C20.72 13.5 20.5 13.72 20.5 14C20.5 14.28 20.72 14.5 21 14.5C21.28 14.5 21.5 14.28 21.5 14C21.5 13.72 21.28 13.5 21 13.5ZM14 17C13.45 17 13 17.45 13 18C13 18.55 13.45 19 14 19C14.55 19 15 18.55 15 18C15 17.45 14.55 17 14 17ZM14 20.5C13.72 20.5 13.5 20.72 13.5 21C13.5 21.28 13.72 21.5 14 21.5C14.28 21.5 14.5 21.28 14.5 21C14.5 20.72 14.28 20.5 14 20.5ZM10 8.5C9.17 8.5 8.5 9.17 8.5 10C8.5 10.83 9.17 11.5 10 11.5C10.83 11.5 11.5 10.83 11.5 10C11.5 9.17 10.83 8.5 10 8.5ZM10 17C9.45 17 9 17.45 9 18C9 18.55 9.45 19 10 19C10.55 19 11 18.55 11 18C11 17.45 10.55 17 10 17ZM14 12.5C13.17 12.5 12.5 13.17 12.5 14C12.5 14.83 13.17 15.5 14 15.5C14.83 15.5 15.5 14.83 15.5 14C15.5 13.17 14.83 12.5 14 12.5ZM14 8.5C13.17 8.5 12.5 9.17 12.5 10C12.5 10.83 13.17 11.5 14 11.5C14.83 11.5 15.5 10.83 15.5 10C15.5 9.17 14.83 8.5 14 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LensBlur'

/**
 * Material Icon: Lens Blur
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lens_blur Material Icon Docs}
 */
export const LensBlur = memo(Icon)
