import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 18.5C12.99 18.5 10.82 17.08 9.74 15H15.5L16.5 13H9.08C9.03 12.67 9 12.34 9 12C9 11.66 9.03 11.33 9.08 11H15.5L16.5 9H9.74C10.82 6.92 13 5.5 15.5 5.5C17.11 5.5 18.59 6.09 19.73 7.07L21.5 5.3C19.91 3.87 17.8 3 15.5 3C11.58 3 8.26 5.51 7.02 9H3.5L2.5 11H6.56C6.52 11.33 6.5 11.66 6.5 12C6.5 12.34 6.52 12.67 6.56 13H3.5L2.5 15H7.02C8.26 18.49 11.58 21 15.5 21C17.81 21 19.91 20.13 21.5 18.7L19.72 16.93C18.59 17.91 17.12 18.5 15.5 18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Euro'

/**
 * Material Icon: Euro
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:euro Material Icon Docs}
 */
export const Euro = memo(Icon)
