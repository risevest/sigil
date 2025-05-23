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
          d="M10 2a1 1 0 0 0-2 0v5a1 1 0 0 0 0 2v12H7a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-1.75c.073-.347.153-.753.234-1.196C17.737 18.41 18 16.59 18 15c0-2.489-.547-4.546-1.384-6.212A.998.998 0 0 0 16 7h-.494a11.464 11.464 0 0 0-1.049-1.207C13.24 4.576 11.692 3.543 10 3.133zm0 5h2.83a9.502 9.502 0 0 1 1.619 2H10z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BurjAlArabFill'

/**
 * MingCute Icon: Burj Al Arab Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BurjAlArabFill = memo(Icon)
