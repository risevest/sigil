import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 1.5C15.0376 1.5 17.5 3.96243 17.5 7C17.5 8.77579 16.6584 10.355 15.3523 11.3606C17.2389 12.4091 18.5 14.3186 18.5 16.5C18.5 19.8137 15.5899 22.5 12 22.5C8.41015 22.5 5.5 19.8137 5.5 16.5C5.5 14.3186 6.7611 12.4091 8.64703 11.3589C7.34158 10.355 6.5 8.77579 6.5 7C6.5 3.96243 8.96243 1.5 12 1.5ZM12 12.5C9.48055 12.5 7.5 14.3282 7.5 16.5C7.5 18.6718 9.48055 20.5 12 20.5C14.5194 20.5 16.5 18.6718 16.5 16.5C16.5 14.3282 14.5194 12.5 12 12.5ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Number8'

/**
 * Remix Icon: Number 8
 * @see {@link https://remixicon.com/icon/number-8 Remix Icon Docs}
 */
export const Number8 = memo(Icon)
