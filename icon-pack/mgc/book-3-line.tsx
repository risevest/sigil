import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M3.255 3.667A1.01 1.01 0 0 1 4.022 2H16.5a4.5 4.5 0 1 1 0 9H4.022a1.01 1.01 0 0 1-.767-1.667l.754-.88a3 3 0 0 0 0-3.905l-.754-.88ZM6.062 4a5.004 5.004 0 0 1 0 5H16.5a2.5 2.5 0 0 0 0-5zM3 16.5A4.5 4.5 0 0 1 7.5 12h12.478a1.01 1.01 0 0 1 .767 1.667l-.755.88a3 3 0 0 0 0 3.905l.755.88A1.01 1.01 0 0 1 19.978 21H7.5A4.5 4.5 0 0 1 3 16.5M7.5 14a2.5 2.5 0 0 0 0 5h10.438a5.004 5.004 0 0 1 0-5z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Book3Line'

/**
 * MingCute Icon: Book 3 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Book3Line = memo(Icon)
