import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C16.6944 2 20.5 5.80558 20.5 10.5C20.5 17 15 22.5 12 22.5C9 22.5 3.5 17 3.5 10.5C3.5 5.80558 7.30558 2 12 2ZM17.5 12C15.0147 12 13 14.0147 13 16.5C13 16.6603 13.0084 16.8186 13.0252 16.9752C13.1812 16.9916 13.3396 17 13.5 17C15.9853 17 18 14.9853 18 12.5C18 12.3396 17.9916 12.1812 17.9746 12.0247C17.8186 12.0084 17.6603 12 17.5 12ZM6.5 12C6.33963 12 6.18121 12.0084 6.02475 12.0252C6.00839 12.1812 6 12.3396 6 12.5C6 14.9853 8.01472 17 10.5 17C10.6603 17 10.8186 16.9916 10.9753 16.9746C10.9916 16.8186 11 16.6603 11 16.5C11 14.0147 8.98528 12 6.5 12Z" />
    </Svg>
  )
}

Icon.displayName = 'AliensFill'

/**
 * Remix Icon: Aliens Fill
 * @see {@link https://remixicon.com/icon/aliens-fill Remix Icon Docs}
 */
export const AliensFill = memo(Icon)
