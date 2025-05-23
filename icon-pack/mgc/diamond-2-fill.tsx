import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M17 3a2 2 0 0 1 1.492.668l.108.132 3.704 4.939a2 2 0 0 1-.012 2.416l-.108.13-9.259 10.184a1.25 1.25 0 0 1-1.753.096l-.097-.096-9.259-10.185a2 2 0 0 1-.215-2.407l.095-.138L5.4 3.8a2 2 0 0 1 1.43-.793L7 3zm-3.31 2.863.638 2.894a.2.2 0 0 1-.195.243H9.867a.2.2 0 0 1-.195-.243l.638-2.894c.046-.208-.222-.334-.353-.166L7.426 8.944a.2.2 0 0 1-.113.072l-3.227.741c-.203.047-.208.335-.006.389l3.16.832a.2.2 0 0 1 .124.097l4.46 8.12a.2.2 0 0 0 .351 0l4.46-8.12a.2.2 0 0 1 .125-.097l3.16-.832c.202-.054.197-.342-.006-.389l-3.227-.741a.2.2 0 0 1-.113-.072l-2.53-3.247c-.132-.168-.4-.042-.354.166M14.228 11a.2.2 0 0 1 .199.218l-.014.056-2.227 5.57a.2.2 0 0 1-.34.054l-.032-.055-2.227-5.569a.2.2 0 0 1 .128-.266L9.772 11z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Diamond2Fill'

/**
 * MingCute Icon: Diamond 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Diamond2Fill = memo(Icon)
