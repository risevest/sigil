import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 12L12 14L10 12L12 10L14 12ZM12 6L14.12 8.12L16.62 5.62L12 1L7.38 5.62L9.88 8.12L12 6ZM6 12L8.12 9.88L5.62 7.38L1 12L5.62 16.62L8.12 14.12L6 12ZM18 12L15.88 14.12L18.38 16.62L23 12L18.38 7.38L15.88 9.88L18 12ZM12 18L9.88 15.88L7.38 18.38L12 23L16.62 18.38L14.12 15.88L12 18Z" />
    </Svg>
  )
}

Icon.displayName = 'Api'

/**
 * Material Icon: Api
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:api Material Icon Docs}
 */
export const Api = memo(Icon)
