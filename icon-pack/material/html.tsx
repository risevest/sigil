import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 9H5V15H3.5V12.5H1.5V15H0V9H1.5V11H3.5V9ZM17.5 9H13C12.45 9 12 9.45 12 10V15H13.5V10.5H14.5V14H16V10.49H17V15H18.5V10C18.5 9.45 18.05 9 17.5 9ZM11 9H6V10.5H7.75V15H9.25V10.5H11V9ZM24 15V13.5H21.5V9H20V15H24Z" />
    </Svg>
  )
}

Icon.displayName = 'Html'

/**
 * Material Icon: Html
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:html Material Icon Docs}
 */
export const Html = memo(Icon)
