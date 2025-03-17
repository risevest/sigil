import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 8.5C11.09 8.5 9.25 8.96 9.25 9.88V14.5H10.75V19H13.25V14.5H14.75V9.88C14.75 8.97 12.91 8.5 12 8.5ZM12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
      <Path d="M12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z" />
    </Svg>
  )
}

Icon.displayName = 'Attribution'

/**
 * Material Icon: Attribution
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:attribution Material Icon Docs}
 */
export const Attribution = memo(Icon)
