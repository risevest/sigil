import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M16.84 10.972A7 7 0 0 0 4.5 15.5a1.5 1.5 0 0 1-3 0c0-5.523 4.477-10 10-10a9.972 9.972 0 0 1 7.418 3.295l.347-1.964a1.5 1.5 0 1 1 2.954.52l-1.042 5.91a1.5 1.5 0 0 1-.617.968 1.607 1.607 0 0 1-1.385.202l-5.644-.996a1.5 1.5 0 1 1 .52-2.954l2.788.491Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Forward2Fill'

/**
 * MingCute Icon: Forward 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Forward2Fill = memo(Icon)
