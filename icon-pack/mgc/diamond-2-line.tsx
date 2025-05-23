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
          d="M17 3a2 2 0 0 1 1.492.668l.108.132 3.704 4.939a2 2 0 0 1-.012 2.416l-.108.13-9.259 10.184a1.25 1.25 0 0 1-1.753.096l-.097-.096-9.259-10.185a2 2 0 0 1-.215-2.407l.095-.138L5.4 3.8a2 2 0 0 1 1.43-.793L7 3zm-2.477 8H9.477L12 17.307zm5.217 0h-3.063l-2.406 6.015zM7.323 11H4.261l5.468 6.015zm5.059-6h-.764l-2 4h4.764zM17 5h-2.382l2 4H20zM9.382 5H7L4 9h3.382z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Diamond2Line'

/**
 * MingCute Icon: Diamond 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Diamond2Line = memo(Icon)
