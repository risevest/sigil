import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 17.5C14.5 19.15 13.15 20.5 11.5 20.5C9.85 20.5 8.5 19.15 8.5 17.5H10.5C10.5 18.05 10.95 18.5 11.5 18.5C12.05 18.5 12.5 18.05 12.5 17.5C12.5 16.95 12.05 16.5 11.5 16.5H2V14.5H11.5C13.15 14.5 14.5 15.85 14.5 17.5ZM19 7C19 5.07 17.43 3.5 15.5 3.5C13.57 3.5 12 5.07 12 7H14C14 6.17 14.67 5.5 15.5 5.5C16.33 5.5 17 6.17 17 7C17 7.83 16.33 8.5 15.5 8.5H2V10.5H15.5C17.43 10.5 19 8.93 19 7ZM18.5 11.5H2V13.5H18.5C19.33 13.5 20 14.17 20 15C20 15.83 19.33 16.5 18.5 16.5V18.5C20.43 18.5 22 16.93 22 15C22 13.07 20.43 11.5 18.5 11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Air'

/**
 * Material Icon: Air
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:air Material Icon Docs}
 */
export const Air = memo(Icon)
