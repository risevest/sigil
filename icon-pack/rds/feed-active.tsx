import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 28 28" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.75 4H9.77C8.86 4 8.10999 4.7 8.03999 5.6V12.71L8.02 16.87V16.99H6.52V13.46L6.53 11.96H4V23.5H23.5V5.75C23.5 4.78 22.72 4 21.75 4ZM20.47 19.71L11.49 19.69V18.19L20.47 18.21V19.71ZM20.47 17.13H11.49V15.62H20.47V17.13ZM19.81 12.8C19.29 13.32 18.6 13.61 17.87 13.61C17.14 13.61 16.43 13.32 15.92 12.79C15.41 12.29 15.12 11.6 15.12 10.86C15.12 10.12 15.41 9.42 15.93 8.91C16.43 8.4 17.12 8.11 17.87 8.11C19.38 8.11 20.62 9.34 20.62 10.86C20.62 11.6 20.33 12.29 19.81 12.8Z" />
    </Svg>
  )
}

Icon.displayName = 'FeedActive'

export const FeedActive = memo(Icon)
