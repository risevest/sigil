import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.7499 5.25C14.8499 5.25 15.7499 4.35 15.7499 3.25C15.7499 2.15 14.8499 1.25 13.7499 1.25C12.6499 1.25 11.7499 2.15 11.7499 3.25C11.7499 4.35 12.6499 5.25 13.7499 5.25ZM17.7499 10.53C16.5199 10.16 15.5299 9.36 14.9499 8.35L13.9499 6.75C13.5399 6.1 12.8399 5.75 12.1099 5.75C11.3299 5.75 10.5199 6.25 10.3299 7.19C10.1399 8.13 7.24992 22.75 7.24992 22.75H9.34992L11.1499 14.75L13.2499 16.75V22.75H15.2499V15.25L13.1499 13.25L13.7499 10.25C14.7499 11.4 16.1599 12.26 17.7499 12.59V22.75H19.2499V8.75H17.7499V10.53ZM7.67992 12.88L5.55992 12.47C5.01992 12.36 4.65992 11.84 4.76992 11.3L5.52992 7.37C5.73992 6.29 6.78992 5.58 7.86992 5.79L9.02992 6.02L7.67992 12.88Z" />
    </Svg>
  )
}

Icon.displayName = 'Hiking'

/**
 * Material Icon: Hiking
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hiking Material Icon Docs}
 */
export const Hiking = memo(Icon)
