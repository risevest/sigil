import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Warning'

/**
 * Material Icon: Warning
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:warning Material Icon Docs}
 */
export const Warning = memo(Icon)
