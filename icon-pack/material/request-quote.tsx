import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V8H18V20H6ZM11 19H13V18H14C14.55 18 15 17.55 15 17V14C15 13.45 14.55 13 14 13H11V12H15V10H13V9H11V10H10C9.45 10 9 10.45 9 11V14C9 14.55 9.45 15 10 15H13V16H9V18H11V19Z" />
    </Svg>
  )
}

Icon.displayName = 'RequestQuote'

/**
 * Material Icon: Request Quote
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:request_quote Material Icon Docs}
 */
export const RequestQuote = memo(Icon)
