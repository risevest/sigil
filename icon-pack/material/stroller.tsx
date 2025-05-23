import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 19.5C17 20.6 16.1 21.5 15 21.5C13.9 21.5 13 20.6 13 19.5C13 18.4 13.9 17.5 15 17.5C16.1 17.5 17 18.4 17 19.5ZM5 17.5C3.9 17.5 3 18.4 3 19.5C3 20.6 3.9 21.5 5 21.5C6.1 21.5 7 20.6 7 19.5C7 18.4 6.1 17.5 5 17.5ZM14 8.16L8.6 14.5H14V8.16ZM17.65 2.5C19.52 2.5 21 4.06 21 5.98V6.5H19V5.98C19 5.16 18.42 4.5 17.65 4.5C16.97 4.5 16.58 5.09 16 5.77V14.5C16 15.6 15.1 16.5 14 16.5H6.43C5.58 16.5 5.12 15.5 5.67 14.85L14.47 4.53C15.11 3.77 15.99 2.5 17.65 2.5ZM9 4.5C8.35 4.5 7.71 4.59 7.09 4.77L8.49 6.17L9.86 4.56C9.58 4.52 9.29 4.5 9 4.5ZM9 2.5C10.56 2.5 12.03 2.9 13.3 3.6L8.6 9.11L3.72 4.22C5.21 3.14 7.03 2.5 9 2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Stroller'

/**
 * Material Icon: Stroller
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stroller Material Icon Docs}
 */
export const Stroller = memo(Icon)
