import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 6V2H1V20H15V18H11V16H13V14H11V12H13V10H11V8H19V14H21V6H11ZM5 18H3V16H5V18ZM5 14H3V12H5V14ZM5 10H3V8H5V10ZM5 6H3V4H5V6ZM9 18H7V16H9V18ZM9 14H7V12H9V14ZM9 10H7V8H9V10ZM9 6H7V4H9V6ZM23 18V20H21V22H19V20H17V18H19V16H21V18H23ZM17 10H15V12H17V10ZM17 14H15V16H17V14Z" />
    </Svg>
  )
}

Icon.displayName = 'DomainAdd'

/**
 * Material Icon: Domain Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:domain_add Material Icon Docs}
 */
export const DomainAdd = memo(Icon)
