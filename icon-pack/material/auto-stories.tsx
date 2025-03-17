import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.47 6.95C22 6.71 21.51 6.51 21 6.34V18.37C19.86 17.96 18.69 17.75 17.5 17.75C15.6 17.75 13.72 18.29 12 19.33V7.23C10.38 6.3 8.51 5.75 6.5 5.75C4.71 5.75 3.02 6.19 1.53 6.95C1.2 7.11 1 7.46 1 7.83V19.91C1 20.49 1.47 20.9 2 20.9C2.16 20.9 2.32 20.86 2.48 20.78C3.69 20.15 5.05 19.75 6.5 19.75C8.57 19.75 10.48 20.57 12 21.75C13.52 20.57 15.43 19.75 17.5 19.75C18.95 19.75 20.31 20.15 21.52 20.79C21.68 20.87 21.84 20.91 22 20.91C22.52 20.91 23 20.5 23 19.92V7.83C23 7.46 22.8 7.11 22.47 6.95ZM10 18.37C8.86 17.96 7.69 17.75 6.5 17.75C5.31 17.75 4.14 17.96 3 18.37V8.46C4.11 7.99 5.28 7.75 6.5 7.75C7.7 7.75 8.89 8 10 8.47V18.37ZM19 2.25L14 7.25V16.75L19 12.25V2.25Z" />
    </Svg>
  )
}

Icon.displayName = 'AutoStories'

/**
 * Material Icon: Auto Stories
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:auto_stories Material Icon Docs}
 */
export const AutoStories = memo(Icon)
