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
          d="M17.817 6.989c-.353-.508-1.297-1.222-2.826-.914-.892.179-1.425.62-1.764 1.202-.361.62-.536 1.463-.536 2.444a1 1 0 0 1-1 1c-2.366 0-4.618-.703-6.513-2.604a10.52 10.52 0 0 0-.168 2.34c.053 1.086.312 2.175.927 3.108.605.917 1.6 1.757 3.264 2.285a1 1 0 0 1 .41 1.655 8.52 8.52 0 0 1-1.796 1.405c1.06.11 2.082.118 3.03.032 1.92-.174 3.449-.723 4.405-1.5 2.013-1.632 3.09-4.066 2.89-8.144-.034-.67.613-1.393.925-1.942-.471.088-.943.072-1.248-.367M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404.626-1.074 1.644-1.864 3.098-2.156 2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502-1.37 1.112-3.332 1.743-5.485 1.938-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177-1.199-.636-2.082-1.468-2.707-2.416-.868-1.318-1.19-2.788-1.254-4.113-.064-1.325.127-2.553.329-3.438.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TwitterLine'

/**
 * MingCute Icon: Twitter Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TwitterLine = memo(Icon)
